import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  interestedIn?: string;
  message?: string;
  combinedConsent: boolean;
  honeypot?: string;
  b_company_url?: string;
  formStartTime?: number;
}

// In-memory rate limiting store (tracks requests per IP within sliding window)
interface RateLimitRecord {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

// In-memory duplicate request prevention (tracks hash/key of recent submissions)
interface SubmissionRecord {
  timestamp: number;
}
const recentSubmissionsMap = new Map<string, SubmissionRecord>();

// Periodic garbage collection for rate-limit caches (prevents memory leak)
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();
function cleanupStores() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
  for (const [key, record] of recentSubmissionsMap.entries()) {
    if (now - record.timestamp > 60 * 1000) {
      recentSubmissionsMap.delete(key);
    }
  }
}

/**
 * Strips HTML tags, script/style contents, control characters and trims excess whitespace
 */
function sanitizeInput(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // strip scripts and contents
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "") // strip styles and contents
    .replace(/<[^>]*>?/gm, "") // strip HTML markup
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, "") // strip control characters
    .trim();
}

/**
 * Masks sensitive PII for safe administrative server logging
 */
function maskValue(val: string): string {
  if (!val) return "***";
  if (val.length <= 4) return "****";
  return `${val.substring(0, 2)}****${val.substring(val.length - 2)}`;
}

export async function POST(request: NextRequest) {
  cleanupStores();

  try {
    // -------------------------------------------------------------------------
    // 1. IP & Rate Limiting Enforcement
    // -------------------------------------------------------------------------
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
    const MAX_REQUESTS = 5; // Max 5 submissions per 10 minutes per IP

    const currentLimit = rateLimitMap.get(clientIp) || {
      count: 0,
      resetTime: now + WINDOW_MS,
    };

    if (now > currentLimit.resetTime) {
      currentLimit.count = 0;
      currentLimit.resetTime = now + WINDOW_MS;
    }

    if (currentLimit.count >= MAX_REQUESTS) {
      console.warn(`[RATE LIMIT EXCEEDED] IP ${maskValue(clientIp)} exceeded ${MAX_REQUESTS} requests.`);
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many consultation requests received from this connection. Please wait a few minutes before trying again or call +91 7303437659.",
        },
        { status: 429 }
      );
    }

    // -------------------------------------------------------------------------
    // 2. Parse & Check Request Payload
    // -------------------------------------------------------------------------
    let body: EnquiryPayload;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request payload." },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------------
    // 3. Spam Protection: Honeypots & Bot Speed Detection
    // -------------------------------------------------------------------------
    // If hidden honeypot fields are filled, it's an automated spam script
    if (body.honeypot || body.b_company_url) {
      console.warn(`[SPAM DETECTED] Honeypot triggered from IP ${maskValue(clientIp)}.`);
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // Bot speed check: human takes at least 1.5 seconds to fill and submit
    if (body.formStartTime && typeof body.formStartTime === "number") {
      const elapsed = now - body.formStartTime;
      if (elapsed < 1500) {
        console.warn(`[BOT SPEED DETECTED] Submission completed in ${elapsed}ms from IP ${maskValue(clientIp)}.`);
        return NextResponse.json(
          {
            success: false,
            error: "Form was submitted unnaturally fast. Please verify your details and try again.",
          },
          { status: 400 }
        );
      }
    }

    // -------------------------------------------------------------------------
    // 4. Server-Side Input Sanitization
    // -------------------------------------------------------------------------
    const fullName = sanitizeInput(body.fullName);
    const rawMobile = sanitizeInput(body.mobile);
    const email = sanitizeInput(body.email).toLowerCase();
    const interestedIn = sanitizeInput(body.interestedIn) || "General Consultation Enquiry";
    const message = sanitizeInput(body.message);
    const combinedConsent = body.combinedConsent;

    // -------------------------------------------------------------------------
    // 5. Server-Side Strict Field Validations
    // -------------------------------------------------------------------------
    // Full Name: 2 - 70 characters, letters, spaces, hyphens, dots
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }
    if (fullName.length > 70) {
      return NextResponse.json(
        { success: false, error: "Full name cannot exceed 70 characters." },
        { status: 400 }
      );
    }
    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    if (!nameRegex.test(fullName)) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name can only contain letters, spaces, hyphens, and periods.",
        },
        { status: 400 }
      );
    }

    // Indian Mobile Number: 10 digits starting with 6, 7, 8, or 9
    const cleanPhone = rawMobile.replace(/[\s-]/g, "");
    const indianMobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !indianMobileRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please provide a valid 10-digit Indian mobile number (e.g., 9876543210 or +91 98765 43210).",
        },
        { status: 400 }
      );
    }

    // Email Address: RFC compliant pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    // Requirements / Message: Required, minimum 5 characters, maximum 2000 characters
    if (!message || message.length < 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter your requirements or enquiry details (minimum 5 characters).",
        },
        { status: 400 }
      );
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message cannot exceed 2000 characters." },
        { status: 400 }
      );
    }

    // Combined Consent Checkbox
    if (combinedConsent !== true) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Consent is required. Please check the agreement box to accept the Privacy Policy and receive updates.",
        },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------------
    // 6. Duplicate Submission Protection (60 seconds duplicate window)
    // -------------------------------------------------------------------------
    // Normalize phone to last 10 digits for duplicate key
    const tenDigitPhone = cleanPhone.replace(/^(?:\+91|91|0)/, "");
    const duplicateKey = `${clientIp}:${tenDigitPhone}:${email}`;
    const previousSubmission = recentSubmissionsMap.get(duplicateKey);

    if (previousSubmission && now - previousSubmission.timestamp < 60 * 1000) {
      console.warn(`[DUPLICATE REJECTED] Duplicate submission attempt from ${maskValue(clientIp)}.`);
      return NextResponse.json(
        {
          success: false,
          error:
            "A consultation enquiry from this contact was recently received. Please allow our advisory team a moment to respond.",
        },
        { status: 409 }
      );
    }

    // -------------------------------------------------------------------------
    // 7. Success Processing & Reference Generation
    // -------------------------------------------------------------------------
    // Increment rate limiter count
    currentLimit.count += 1;
    rateLimitMap.set(clientIp, currentLimit);

    // Record submission to prevent duplicates
    recentSubmissionsMap.set(duplicateKey, { timestamp: now });

    // Generate unique audit reference ID
    const timestampIso = new Date().toISOString();
    const uniqueSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `ZR-REQ-${Date.now().toString(36).toUpperCase()}-${uniqueSuffix}`;

    // Safe sanitized server log
    console.log(
      `[ENQUIRY REGISTERED] Ref: ${referenceId} | Name: ${maskValue(fullName)} | Mobile: ${maskValue(tenDigitPhone)} | Email: ${maskValue(email)} | IP: ${maskValue(clientIp)}`
    );

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Thank you for contacting Zentara Realty. Your residential consultation enquiry has been registered successfully. Our advisory team will connect with you shortly.",
        submittedAt: timestampIso,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    // Log internal error safely without leaking sensitive information
    const errMessage = err instanceof Error ? err.message : "Internal Server Error";
    console.error("[ENQUIRY HANDLER ERROR] An unexpected exception occurred:", errMessage);

    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected server error occurred while processing your request. Please try again later or contact us directly at +91 7303437659.",
      },
      { status: 500 }
    );
  }
}
