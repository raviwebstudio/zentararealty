"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { CookiePreferences } from "./CookieConsent";

const STORAGE_KEY = "zr_cookie_consent_v1";
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-DZPGFHCJNJ";

export default function GoogleAnalytics() {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);
  const pathname = usePathname();
  const isInitialLoad = useRef(true);
  const initializedRef = useRef(false);

  useEffect(() => {
    // 1. Initial consent evaluation from localStorage
    const readStoredConsent = () => {
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

    readStoredConsent();

    // 2. Listen to real-time consent updates from CookieConsent banner
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        const consented = Boolean(customEvent.detail.analytics);
        setHasAnalyticsConsent(consented);

        // Update Google Consent Mode state dynamically
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: consented ? "granted" : "denied",
          });
        }
      }
    };

    window.addEventListener("zr_consent_updated", handleConsentUpdate);
    return () => {
      window.removeEventListener("zr_consent_updated", handleConsentUpdate);
    };
  }, []);

  // 3. Handle SPA navigation (track page_view on route change without duplicate config)
  useEffect(() => {
    if (!hasAnalyticsConsent || !initializedRef.current || typeof window === "undefined") {
      return;
    }

    // Skip the very first mount (it is already tracked during script initialization)
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_title: typeof document !== "undefined" ? document.title : "",
      });
    }
  }, [pathname, hasAnalyticsConsent]);

  // If user has not granted consent, DO NOT inject the external Google Tag script
  if (!hasAnalyticsConsent) {
    return null;
  }

  return (
    <Script
      id="ga4-loader"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      onLoad={() => {
        initializedRef.current = true;
        if (typeof window !== "undefined" && window.gtag) {
          // Update Consent Mode
          window.gtag("consent", "update", {
            analytics_storage: "granted",
          });
          window.gtag("js", new Date());
          // Configure GA4 with send_page_view enabled exactly once
          window.gtag("config", GA_MEASUREMENT_ID, {
            send_page_view: true,
            page_path: pathname,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        }
      }}
    />
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
