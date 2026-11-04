"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { CookiePreferences } from "./CookieConsent";

const STORAGE_KEY = "zr_cookie_consent_v1";

// Helper to scrub Google Analytics tracking cookies from browser when consent is revoked
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

/**
 * GoogleAnalytics Component (GTM-First Integration)
 *
 * Zentara Realty routes GA4 (G-JRGY9GSREV) exclusively through Google Tag Manager (GTM-WRT49SWM)
 * to prevent duplicate GA4 script injections and duplicate page_view events.
 *
 * This component orchestrates:
 * 1. Google Consent Mode v2 updates (analytics_storage & ad_storage/user_data/personalization).
 * 2. Real-time dataLayer events on consent changes ('consent_update').
 * 3. Client-side SPA route transition tracking.
 * 4. Automatic cookie cleanup on consent withdrawal.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // 1. Initial consent evaluation from localStorage
    const readStoredConsent = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as CookiePreferences;
          const analyticsGranted = Boolean(parsed.analytics);
          const marketingGranted = Boolean(parsed.marketing);

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
              analytics_storage: analyticsGranted ? "granted" : "denied",
              ad_storage: marketingGranted ? "granted" : "denied",
              ad_user_data: marketingGranted ? "granted" : "denied",
              ad_personalization: marketingGranted ? "granted" : "denied",
            });
          }

          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "consent_update",
              consent_analytics: analyticsGranted,
              consent_marketing: marketingGranted,
            });
          }
        }
      } catch {
        // Ignore JSON parse errors
      }
    };

    readStoredConsent();

    // 2. Real-time consent listener from CookieConsent banner
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookiePreferences>;
      if (customEvent.detail) {
        const analyticsGranted = Boolean(customEvent.detail.analytics);
        const marketingGranted = Boolean(customEvent.detail.marketing);

        // Update Google Consent Mode v2 state dynamically
        // - Analytics maps to analytics_storage
        // - Marketing maps to ad_storage, ad_user_data, ad_personalization
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: analyticsGranted ? "granted" : "denied",
            ad_storage: marketingGranted ? "granted" : "denied",
            ad_user_data: marketingGranted ? "granted" : "denied",
            ad_personalization: marketingGranted ? "granted" : "denied",
          });
        }

        // Notify GTM container via dataLayer event
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "consent_update",
            consent_analytics: analyticsGranted,
            consent_marketing: marketingGranted,
          });
        }

        // If analytics consent was revoked, remove existing tracking cookies
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

  // 3. Handle SPA route transitions (for GTM virtual pageview triggers)
  useEffect(() => {
    // Skip initial mount because GTM container automatically fires initial pageview on load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_title: typeof document !== "undefined" ? document.title : "",
      });
    }
  }, [pathname]);

  // GTM is the single installation method; no duplicate direct script is rendered
  return null;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
