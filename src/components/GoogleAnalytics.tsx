"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import type { CookiePreferences } from "./CookieConsent";

const STORAGE_KEY = "zr_cookie_consent_v1";
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-JRGY9GSREV";

// Helper to remove Google Analytics cookies if consent is revoked
function clearAnalyticsCookies() {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  try {
    const cookies = document.cookie.split(";");
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    const rootDomain =
      parts.length > 2 ? `.${parts.slice(-2).join(".")}` : hostname;

    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (
        name.startsWith("_ga") ||
        name.startsWith("_gid") ||
        name.startsWith("_gat")
      ) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
      }
    });
  } catch {
    // Ignore cookie clearance errors
  }
}

export default function GoogleAnalytics() {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);
  const [hasMarketingConsent, setHasMarketingConsent] = useState(false);
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
          const analyticsGranted = Boolean(parsed.analytics);
          const marketingGranted = Boolean(parsed.marketing);

          setHasAnalyticsConsent(analyticsGranted);
          setHasMarketingConsent(marketingGranted);

          // Update consent state dynamically in dataLayer
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
              analytics_storage: analyticsGranted ? "granted" : "denied",
              ad_storage: marketingGranted ? "granted" : "denied",
              ad_user_data: marketingGranted ? "granted" : "denied",
              ad_personalization: marketingGranted ? "granted" : "denied",
            });
          }
        } else {
          setHasAnalyticsConsent(false);
          setHasMarketingConsent(false);
        }
      } catch {
        setHasAnalyticsConsent(false);
        setHasMarketingConsent(false);
      }
    };

    readStoredConsent();

    // 2. Listen to real-time consent updates from CookieConsent banner
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        const analyticsGranted = Boolean(customEvent.detail.analytics);
        const marketingGranted = Boolean(customEvent.detail.marketing);

        setHasAnalyticsConsent(analyticsGranted);
        setHasMarketingConsent(marketingGranted);

        // Update Google Consent Mode v2 state dynamically
        // Maps Analytics -> analytics_storage
        // Maps Marketing -> ad_storage, ad_user_data, ad_personalization
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: analyticsGranted ? "granted" : "denied",
            ad_storage: marketingGranted ? "granted" : "denied",
            ad_user_data: marketingGranted ? "granted" : "denied",
            ad_personalization: marketingGranted ? "granted" : "denied",
          });
        }

        // If analytics consent was revoked, remove existing analytics tracking cookies
        if (!analyticsGranted) {
          clearAnalyticsCookies();
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

  // Basic Consent Mode: do not inject external Google Tag script until analytics consent is granted
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
          // Update Google Consent Mode v2 with active preferences
          window.gtag("consent", "update", {
            analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
            ad_storage: hasMarketingConsent ? "granted" : "denied",
            ad_user_data: hasMarketingConsent ? "granted" : "denied",
            ad_personalization: hasMarketingConsent ? "granted" : "denied",
          });
          window.gtag("js", new Date());
          // Configure GA4 with send_page_view enabled exactly once
          window.gtag("config", GA_MEASUREMENT_ID, {
            send_page_view: true,
            page_path: pathname,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: hasMarketingConsent,
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
