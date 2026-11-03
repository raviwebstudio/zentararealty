# Zentara Realty — Official Corporate Website

> **"Discover What's Next in Residential Living."**

Official digital web presence for **ZENTARA REALTY**, an independent residential real estate consultancy based in Gurugram (Gurgaon), Haryana, India. The firm specializes exclusively in discovering, evaluating, and presenting primary-market residential developments, including pre-launch opportunities, newly launched luxury condominiums, and upcoming residential projects across Gurgaon's leading growth corridors.

---

## 1. Confirmed Business Information

- **Brand Name:** ZENTARA REALTY
- **Canonical Website:** [https://zentararealty.property](https://zentararealty.property)
- **Primary Telephone / Call:** `+91 7303437659`
- **Official WhatsApp:** `+91 7303437659` ([Direct Chat Link](https://wa.me/917303437659))
- **Official Email:** `zentararealty@gmail.com`
- **Headquarters / Office:** Gurugram, Haryana, India
- **Industry:** Residential Real Estate Advisory
- **Primary Geographic Focus:** Gurgaon (Gurugram) Metropolitan Region, Haryana, India
- **Core Specializations:**
  - Pre-Launch Residential Projects
  - New Launch Residential Projects
  - Upcoming Residential Developments
  - Builder & Developer Residential Developments

### Mandatory Scope of Advisory
- **Strictly Excluded (Negative Scope):** Zentara Realty does **NOT** handle resale properties, commercial spaces, rental listings, independent second-hand houses, or house flipping. The firm is purely dedicated to primary residential living.

---

## 2. Technology Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **UI Engine:** React 19, TypeScript
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss` and custom luxury design tokens
- **Icons:** Lucide React
- **Architecture:** Streamlined Single-Page Corporate Website with separate dedicated legal routes:
  - `/` — Homepage (Single-Page Experience with smooth anchor navigation)
    - **Hero Section** (Luxury high-rise architecture visual)
    - **About Zentara Realty** (Editorial brand story + luxury lifestyle image + mandate notice)
    - **Pre-Launch Residential Projects** (Curated growth corridor cards with dedicated photos)
    - **Newly Launched Residential Projects** (Active primary condominium developments with layout filters)
    - **Why Choose Zentara Realty** (4 pillars of distinction + corporate consultation imagery)
    - **Contact & Enquiry Section** (Direct communication channels + combined consent form)
  - `/privacy-policy` — DPDP Act 2023 Compliant Privacy Policy
  - `/terms-and-conditions` — Advisory Scope & Statutory Terms
  - `/api/enquiry` — Validated consultation intake & consent audit logging
  - `/robots.txt` — Automated search & AI crawler routing
  - `/sitemap.xml` — Automated XML index
  - `/llms.txt` — AI Search Engine / LLM Entity Index

---

## 3. High-Resolution Visual Assets Suite

All images are stored locally in [`public/images/`](file:///Users/ravigautam/Desktop/workspace/zentara-realty-website/public/images/) and rendered with Next.js responsive optimization:

| File Name | Section | Visual Depiction |
|---|---|---|
| `hero-architecture.jpg` | Hero | Twilight view of an ultra-luxury illuminated residential skyscraper with reflecting pools |
| `about-lifestyle.jpg` | About | High-end penthouse interior living space and open terrace lounge with skyline views |
| `prelaunch-architecture.jpg` | Pre-Launch | Futuristic luxury residential tower with cantilevered green sky gardens |
| `dwarka-expressway.jpg` | Pre-Launch / New Launch | Curvilinear modern luxury skyscraper at dusk along an expressway corridor |
| `spr-residences.jpg` | Pre-Launch / New Launch | Nature-flanked low-density residential towers beside dense woodlands |
| `new-gurgaon.jpg` | Pre-Launch | Master-planned integrated residential enclave with manicured central park |
| `newlaunch-architecture.jpg` | New Launches | Contemporary multi-tower condominium complex with landscaped skydecks |
| `why-choose-consultation.jpg` | Why Choose Us | Corporate advisory boardroom meeting reviewing residential master-plan scale models |

---

## 4. Consent Management (Combined Consent)

### Single Combined Consent Checkbox
In compliance with the updated business specification, the enquiry form features a single, unified checkbox:
- **Checkbox Label:**
  > *"I agree to the Privacy Policy and consent to receive enquiry-related updates and communications from Zentara Realty through WhatsApp and email."*
- **Default State:** Unchecked by default.
- **Withdrawal Mechanism:** Clearly documented withdrawal notice allowing users to revoke consent anytime by messaging "STOP" on WhatsApp or emailing `zentararealty@gmail.com`.
- **Statutory Audit Trail:** Captured with an immutable timestamp, IP address, user-agent, and policy version `DPDP-Combined-v1.1`.
- **Review Notice:** Flagged for legal review under applicable privacy and marketing regulations (including DPDP Act, 2023) prior to commercial production.

---

## 5. Contact Form Email Integration

Every valid enquiry submitted through the website form is delivered directly to:
**`zentararealty@gmail.com`**

### Email Features
- **Branded HTML Template:** Navy Blue (`#102B50`) and Gold (`#C5A46D`) corporate styling with responsive table layout.
- **Complete Lead Details:** Full Name, 10-Digit Mobile, Email Address, Selected Area of Interest, Client Message, and Submission Timestamp (IST).
- **Direct WhatsApp Action:** One-click green button inside the email to initiate a WhatsApp chat with the enquirer.
- **Spam Protection:** Automated invisible honeypot trap, phone regex, email syntax validation, and mandatory consent verification.
- **Fail-Safe Integrity:** The form shows a success message **only** after confirmed email delivery.

### Configuration (Resend or Gmail SMTP)
Create a `.env.local` file based on `.env.example`:

#### Option A: Resend API (Recommended for Cloud / Serverless)
```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev # or your verified domain sender
NOTIFICATION_EMAIL_TO=zentararealty@gmail.com
```

#### Option B: Gmail App Password (Zero External Accounts)
1. Go to your Google Account (`zentararealty@gmail.com`) > Security.
2. Enable 2-Step Verification.
3. Search for **App Passwords** (or visit `https://myaccount.google.com/apppasswords`).
4. Generate a 16-character password for "Zentara Realty Website".
5. Add to `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=zentararealty@gmail.com
SMTP_PASS=your-16-char-app-password
NOTIFICATION_EMAIL_TO=zentararealty@gmail.com
```

---

## 6. Build & Deployment Instructions

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```
