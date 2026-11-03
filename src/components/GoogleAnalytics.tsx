"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { CookiePreferences } from "./CookieConsent";

const STORAGE_KEY = "zr_cookie_consent_v1";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initial check from localStorage
    const checkConsent = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as CookiePreferences;
          setHasAnalyticsConsent(Boolean(parsed.analytics));
        } else {
          setHasAnalyticsConsent(false);
        }
      } catch {
        setHasAnalyticsConsent(false);
      }
    };

    checkConsent();

    // 2. Listen to consent updates dispatched by CookieConsent component
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        setHasAnalyticsConsent(Boolean(customEvent.detail.analytics));
      }
    };

    window.addEventListener("zr_consent_updated", handleConsentUpdate);
    return () => {
      window.removeEventListener("zr_consent_updated", handleConsentUpdate);
    };
  }, []);

  // 3. Track page views safely without PII
  useEffect(() => {
    if (!hasAnalyticsConsent || !measurementId || typeof window === "undefined") {
      return;
    }

    if (window.gtag) {
      window.gtag("config", measurementId, {
        page_path: pathname,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
      });
    }
  }, [pathname, hasAnalyticsConsent, measurementId]);

  // If no measurement ID is configured or user did not grant analytics consent, DO NOT LOAD GA4
  if (!measurementId || !hasAnalyticsConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

