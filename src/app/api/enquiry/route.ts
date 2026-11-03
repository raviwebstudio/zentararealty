import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  interestedIn: string;
  message?: string;
  combinedConsent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryPayload = await request.json();

    const {
      fullName,
      mobile,
      email,
      interestedIn,
      message = "",
      combinedConsent,
    } = body;

    // 1. Mandatory Fields Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!mobile || typeof mobile !== "string") {
      return NextResponse.json(
        { success: false, error: "Please provide a valid mobile number." },
        { status: 400 }
      );
    }

    // Clean phone number: remove spaces and hyphens
    const cleanPhone = mobile.replace(/[\s-]/g, "");
    const phoneRegex = /^(\+91[\s-]?)?[6789]\d{9}$|^\+?[1-9]\d{7,14}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit mobile number or standard international telephone number.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 2. Strict Combined Consent Verification
    if (combinedConsent !== true) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Consent is mandatory. Please check the box agreeing to the Privacy Policy and communications to proceed.",
        },
        { status: 400 }
      );
    }

    // 3. Generate Official Audit Reference ID
    const timestamp = new Date().toISOString();
    const uniqueSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const referenceId = `ZR-REQ-${Date.now().toString(36).toUpperCase()}-${uniqueSuffix}`;

    // 4. Consent Audit Record (Combined Privacy + WhatsApp + Email)
    const consentAuditRecord = {
      referenceId,
      combinedConsentGiven: true,
      privacyConsentGiven: true,
      whatsappMarketingConsent: true,
      emailMarketingConsent: true,
      consentText:
        "I agree to the Privacy Policy and consent to receive enquiry-related updates and communications from Zentara Realty through WhatsApp and email.",
      consentTimestamp: timestamp,
      policyVersion: "DPDP-Combined-v1.1",
      ipAddress: request.headers.get("x-forwarded-for") || "direct",
      userAgent: request.headers.get("user-agent") || "unknown",
      withdrawalNotice: "Revocable anytime by sending STOP on WhatsApp or emailing zentararealty@gmail.com",
    };

    // 5. Build structured enquiry record
    const enquiryRecord = {
      referenceId,
      fullName: fullName.trim(),
      mobile: cleanPhone,
      email: email.trim().toLowerCase(),
      interestedIn: interestedIn || "General Enquiry",
      message: message.trim(),
      submittedAt: timestamp,
      consentAudit: consentAuditRecord,
    };

    // 6. External Webhook Forwarding (if configured in environment)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    let forwardedToWebhook = false;

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiryRecord),
        });
        if (webhookResponse.ok) {
          forwardedToWebhook = true;
        }
      } catch (webhookErr) {
        console.error("Enquiry webhook forward error:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Thank you for reaching out to Zentara Realty. Your residential enquiry has been registered. Our advisory team will contact you directly via WhatsApp or email.",
        submittedAt: timestamp,
        backendIntegrated: Boolean(webhookUrl),
        forwardedToWebhook,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please contact us directly at +91 7303437659.",
      },
      { status: 500 }
    );
  }
}
