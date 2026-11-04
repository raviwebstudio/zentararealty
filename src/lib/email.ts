import nodemailer from "nodemailer";
import { Resend } from "resend";

export interface EmailEnquiryData {
  referenceId: string;
  fullName: string;
  mobile: string;
  email: string;
  interestedIn: string;
  message?: string;
  submittedAt: string;
  ipAddress?: string;
  policyVersion: string;
}

export function generateEnquiryHtml(data: EmailEnquiryData): string {
  const formattedDate = new Date(data.submittedAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const cleanPhone = data.mobile.replace(/[\s-]/g, "");
  const waUrl = `https://wa.me/${cleanPhone.replace("+", "")}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry – Zentara Realty</title>
  <style>
    body { margin: 0; padding: 0; background-color: #F7F8FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #202938; }
    .container { max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #E5E9F0; box-shadow: 0 4px 16px rgba(16, 43, 80, 0.08); }
    .header { background: linear-gradient(135deg, #0B1B32 0%, #102B50 100%); padding: 36px 30px; text-align: center; border-bottom: 3px solid #C5A46D; }
    .header-logo { font-size: 26px; font-weight: 700; letter-spacing: 4px; color: #ffffff; margin: 0; }
    .header-logo span { color: #C5A46D; }
    .header-sub { font-size: 10px; font-weight: 600; letter-spacing: 3px; color: #D8C39D; margin-top: 6px; text-transform: uppercase; }
    .badge { display: inline-block; padding: 6px 14px; background-color: rgba(197, 164, 109, 0.15); border: 1px solid #C5A46D; border-radius: 20px; color: #C5A46D; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 14px; }
    .content { padding: 32px 30px; }
    .alert-box { background-color: #F7F8FA; border-left: 4px solid #C5A46D; padding: 14px 18px; margin-bottom: 24px; border-radius: 4px; font-size: 13px; color: #55647A; }
    .field-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .field-table tr { border-bottom: 1px solid #F0F2F5; }
    .field-table tr:last-child { border-bottom: none; }
    .field-label { width: 35%; padding: 14px 10px 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #102B50; }
    .field-value { width: 65%; padding: 14px 0; font-size: 14px; color: #202938; font-weight: 500; }
    .field-value a { color: #102B50; font-weight: 600; text-decoration: none; }
    .field-value a:hover { color: #C5A46D; text-decoration: underline; }
    .cta-button { display: inline-block; padding: 8px 14px; background-color: #25D366; color: #ffffff !important; font-size: 11px; font-weight: 600; border-radius: 6px; text-decoration: none; margin-left: 8px; }
    .message-card { background-color: #F7F8FA; border: 1px solid #E5E9F0; border-radius: 8px; padding: 18px 20px; margin-top: 10px; font-size: 13px; line-height: 1.6; color: #334155; font-style: italic; }
    .meta-box { background-color: #F9FAFB; border: 1px dashed #CBD5E1; border-radius: 8px; padding: 14px 18px; font-size: 11px; color: #64748B; margin-top: 24px; }
    .footer { background-color: #0B1B32; padding: 24px 30px; text-align: center; font-size: 11px; color: #94A3B8; }
    .footer strong { color: #ffffff; }
    .footer-divider { width: 50px; height: 1px; background-color: #C5A46D; margin: 12px auto; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1 class="header-logo">ZENTARA <span>REALTY</span></h1>
      <div class="header-sub">Residential Real Estate Consultancy • Gurugram</div>
      <div class="badge">New Client Consultation Request</div>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="alert-box">
        A new residential property consultation request was just submitted through <strong>zentararealty.property</strong>. Please review the prospective buyer's details below and respond promptly.
      </div>

      <table class="field-table">
        <tr>
          <td class="field-label">Reference ID</td>
          <td class="field-value"><strong style="color: #102B50; font-family: monospace; font-size: 14px;">${data.referenceId}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Client Name</td>
          <td class="field-value"><strong style="font-size: 15px; color: #102B50;">${data.fullName}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Mobile Number</td>
          <td class="field-value">
            <a href="tel:${cleanPhone}">${data.mobile}</a>
            <a href="${waUrl}" target="_blank" class="cta-button">Chat on WhatsApp</a>
          </td>
        </tr>
        <tr>
          <td class="field-label">Email Address</td>
          <td class="field-value">
            <a href="mailto:${data.email}">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td class="field-label">Area of Interest</td>
          <td class="field-value">
            <span style="display: inline-block; padding: 4px 10px; background-color: #EFF6FF; color: #1E40AF; border-radius: 4px; font-weight: 600; font-size: 12px;">
              ${data.interestedIn}
            </span>
          </td>
        </tr>
        <tr>
          <td class="field-label">Submission Time</td>
          <td class="field-value" style="font-size: 12px; color: #64748B;">
            ${formattedDate} (IST)
          </td>
        </tr>
      </table>

      <!-- Requirements Message -->
      <div style="margin-top: 20px;">
        <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #102B50;">
          Requirements / Client Message:
        </span>
        <div class="message-card">
          ${data.message ? data.message.replace(/\n/g, "<br/>") : "<em>No additional notes provided by client.</em>"}
        </div>
      </div>

      <!-- Legal & Consent Audit Box -->
      <div class="meta-box">
        <strong>Consent &amp; Audit Trail:</strong>
        <ul style="margin: 6px 0 0 0; padding-left: 18px; line-height: 1.5;">
          <li>Consent Text: <em>"I agree to the Privacy Policy and consent to receive enquiry-related updates and communications from Zentara Realty through WhatsApp and email."</em></li>
          <li>Consent Timestamp: ${data.submittedAt}</li>
          <li>Regulatory Framework: ${data.policyVersion}</li>
          <li>Client IP Indicator: ${data.ipAddress || "Direct / CDN"}</li>
        </ul>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div><strong>Zentara Realty</strong> — Gurugram, Haryana, India</div>
      <div class="footer-divider"></div>
      <div>Exclusively Focused on Pre-Launch &amp; Newly Launched Residential Developments</div>
      <div style="margin-top: 6px; color: #64748B;">Official Website: <a href="https://www.zentararealty.property" style="color: #C5A46D; text-decoration: none;">https://www.zentararealty.property</a></div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function generateEnquiryPlainText(data: EmailEnquiryData): string {
  const formattedDate = new Date(data.submittedAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return `
NEW WEBSITE ENQUIRY – ZENTARA REALTY
====================================

Reference ID:      ${data.referenceId}
Client Name:       ${data.fullName}
Mobile Number:     ${data.mobile}
Email Address:     ${data.email}
Area of Interest:  ${data.interestedIn}
Submission Time:   ${formattedDate} IST

Requirements / Message:
-----------------------
${data.message || "(No additional message provided)"}

Consent Audit:
--------------
- Agreement: Privacy Policy, WhatsApp and Email communications consented.
- Timestamp: ${data.submittedAt}
- Framework: ${data.policyVersion}
- IP Address: ${data.ipAddress || "N/A"}

--
Zentara Realty | Residential Real Estate Consultancy
Gurugram, Haryana, India
Website: https://www.zentararealty.property
  `.trim();
}

/**
 * Dispatch enquiry notification email to zentararealty@gmail.com
 * Supports Resend API or SMTP (Gmail App Password / Custom SMTP)
 */
export async function sendEnquiryEmail(
  data: EmailEnquiryData
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const recipient =
    process.env.NOTIFICATION_EMAIL_TO || "zentararealty@gmail.com";
  const subject = "New Website Enquiry – Zentara Realty";
  const html = generateEnquiryHtml(data);
  const text = generateEnquiryPlainText(data);

  // 1. Check for Resend API Key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "enquiry@zentararealty.property";

      const resendResponse = await resend.emails.send({
        from: `Zentara Realty <${fromEmail}>`,
        to: [recipient],
        replyTo: data.email,
        subject,
        html,
        text,
      });

      if (resendResponse.error) {
        console.error("Resend delivery error:", resendResponse.error);
        return {
          success: false,
          error: resendResponse.error.message || "Failed to deliver email via Resend.",
        };
      }

      return {
        success: true,
        messageId: resendResponse.data?.id,
      };
    } catch (err: unknown) {
      console.error("Resend dispatch exception:", err);
      const msg = err instanceof Error ? err.message : "Resend delivery error";
      return { success: false, error: msg };
    }
  }

  // 2. Check for SMTP credentials (Gmail App Password or custom SMTP)
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (smtpUser && smtpPass) {
    try {
      const host =
        process.env.SMTP_HOST ||
        (smtpUser.includes("gmail.com") ? "smtp.gmail.com" : "smtp.gmail.com");
      const port = Number(process.env.SMTP_PORT) || 465;
      const secure =
        process.env.SMTP_SECURE === "false" ? false : port === 465;

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"Zentara Realty Website" <${smtpUser}>`,
        to: recipient,
        replyTo: `${data.fullName} <${data.email}>`,
        subject,
        html,
        text,
      });

      return {
        success: true,
        messageId: info.messageId,
      };
    } catch (err: unknown) {
      console.error("SMTP delivery exception:", err);
      const msg = err instanceof Error ? err.message : "SMTP delivery error";
      return { success: false, error: msg };
    }
  }

  // 3. Fallback: Neither service is configured in environment
  console.warn(
    "[EMAIL CONFIGURATION REQUIRED] Neither RESEND_API_KEY nor SMTP credentials (SMTP_USER & SMTP_PASS) are set in .env.local."
  );

  return {
    success: false,
    error:
      "Email delivery service is not configured. Please configure SMTP or Resend credentials in your environment (.env.local).",
  };
}

