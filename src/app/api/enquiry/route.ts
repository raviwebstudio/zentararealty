import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/email";

interface EnquiryPayload {
  fullName: string;
  mobile: string;
  email: string;
  interestedIn: string;
  message?: string;
  combinedConsent: boolean;
  honeypot?: string;
  b_company_url?: string;
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
      honeypot,
      b_company_url,
    } = body;

    // 0. Anti-spam honeypot verification
    if (honeypot || b_company_url) {
      console.warn("[ANTI-SPAM] Automated honeypot triggered by submission.");
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

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

    // 4. Deliver Email to zentararealty@gmail.com
    const emailResult = await sendEnquiryEmail({
      referenceId,
      fullName: fullName.trim(),
      mobile: cleanPhone,
      email: email.trim().toLowerCase(),
      interestedIn: interestedIn || "General Enquiry",
      message: message.trim(),
      submittedAt: timestamp,
      ipAddress: request.headers.get("x-forwarded-for") || "direct",
      policyVersion: "DPDP-Combined-v1.1",
    });

    // 5. Fail early if email delivery fails (requirement: show success ONLY after successful delivery)
    if (!emailResult.success) {
      console.error("[EMAIL DELIVERY FAILED]", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error:
            emailResult.error ||
            "Unable to deliver enquiry email to zentararealty@gmail.com. Please configure email credentials or contact directly.",
          referenceId,
        },
        { status: 503 }
      );
    }

    // 6. External Webhook Forwarding (optional secondary dispatch)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    let forwardedToWebhook = false;

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referenceId,
            fullName: fullName.trim(),
            mobile: cleanPhone,
            email: email.trim().toLowerCase(),
            interestedIn: interestedIn || "General Enquiry",
            message: message.trim(),
            submittedAt: timestamp,
            emailDelivered: true,
            emailMessageId: emailResult.messageId,
          }),
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
        messageId: emailResult.messageId,
        message:
          "Thank you for reaching out to Zentara Realty. Your enquiry has been delivered directly to zentararealty@gmail.com. Our residential advisory team will connect with you promptly.",
        submittedAt: timestamp,
        backendIntegrated: true,
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
