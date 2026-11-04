"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { ShieldCheck, Settings, Check, X, Info } from "lucide-react";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "zr_cookie_consent_v1";

declare global {
  interface Window {
    openCookiePreferences?: () => void;
    dataLayer?: unknown[];
  }
}

// React 19 safe hydration detector
function subscribe() {
  return () => {};
}
function getSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

export default function CookieConsent() {
  const isMounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Preference states
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    // Register global trigger for footer & external buttons
    window.openCookiePreferences = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;
          setAnalyticsConsent(Boolean(parsed.analytics));
          setMarketingConsent(Boolean(parsed.marketing));
        } catch {
          // ignore
        }
      }
      setModalOpen(true);
    };

    // Check if consent has already been given
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // First visit -> Show banner after slight delay
      const timer = setTimeout(() => {
        setBannerVisible(true);
      }, 750);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        const setInitialPreferences = () => {
          setAnalyticsConsent(Boolean(parsed.analytics));
          setMarketingConsent(Boolean(parsed.marketing));
        };
        setInitialPreferences();
      } catch {
        const timer = setTimeout(() => {
          setBannerVisible(true);
        }, 750);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const preferences: CookiePreferences = {
      essential: true, // Always true
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    // Dispatch event for GA and tracking components
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("zr_consent_updated", { detail: preferences })
      );
    }

    setAnalyticsConsent(analytics);
    setMarketingConsent(marketing);
    setBannerVisible(false);
    setModalOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(analyticsConsent, marketingConsent);
  };

  if (!isMounted) return null;

  return (
    <>
      {/* 1. First-Visit Bottom Banner */}
      {bannerVisible && !modalOpen && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent Banner"
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-[#0B1B32]/95 backdrop-blur-md border-t border-[#C5A46D]/30 shadow-2xl animate-fade-in"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="p-2.5 rounded-lg bg-[#102B50] border border-[#C5A46D]/30 text-[#C5A46D] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <h4 className="font-semibold text-white tracking-wide text-base mb-1">
                  Privacy Preferences &amp; Cookie Notice
                </h4>
                <p className="text-gray-300 leading-relaxed max-w-4xl">
                  Zentara Realty uses essential cookies to ensure our website functions securely.
                  With your consent, we also use analytics and marketing cookies to enhance your browsing experience
                  and measure engagement in accordance with the Digital Personal Data Protection Act, 2023.
                  Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#C5A46D] hover:underline underline-offset-4 font-medium"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for complete information.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0 justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-4 py-2.5 text-xs md:text-sm font-medium text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded-md transition-all flex items-center gap-1.5 focus:ring-2 focus:ring-[#C5A46D]"
              >
                <Settings className="w-3.5 h-3.5" />
                Customize Preferences
              </button>
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white bg-[#102B50] hover:bg-[#183E70] border border-gray-600 rounded-md transition-all focus:ring-2 focus:ring-[#C5A46D]"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] rounded-md transition-all shadow-md focus:ring-2 focus:ring-white"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Custom Preferences Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-preferences-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-2xl bg-[#0B1B32] border border-[#C5A46D]/40 rounded-xl shadow-2xl p-6 md:p-8 text-white max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white rounded-md focus:ring-2 focus:ring-[#C5A46D]"
              aria-label="Close Preferences Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#102B50] border border-[#C5A46D]/40 text-[#C5A46D]">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 id="cookie-preferences-title" className="text-xl font-bold tracking-tight">
                  Customize Cookie Preferences
                </h3>
                <p className="text-xs text-gray-400">
                  Manage consent categories per the Digital Personal Data Protection Act, 2023.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              We respect your right to privacy. You can choose which types of cookies you allow us to use while
              browsing. Essential cookies cannot be turned off as they are required for basic site security and navigation.
            </p>

            <div className="space-y-4 mb-8">
              {/* Category 1: Essential Cookies */}
              <div className="p-4 rounded-lg bg-[#102B50]/60 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white">Essential Cookies</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Always Active
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    aria-label="Essential Cookies always active"
                    className="w-4 h-4 rounded text-[#C5A46D] opacity-60 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  These cookies are technically indispensable for security, CSRF protection, and remembering your
                  privacy preferences. They do not store personally identifiable details.
                </p>
              </div>

              {/* Category 2: Analytics Cookies */}
              <div className="p-4 rounded-lg bg-[#102B50]/60 border border-white/10 hover:border-[#C5A46D]/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="analytics-toggle" className="font-semibold text-sm text-white cursor-pointer">
                    Analytics Cookies (Google Analytics 4)
                  </label>
                  <input
                    id="analytics-toggle"
                    type="checkbox"
                    checked={analyticsConsent}
                    onChange={(e) => setAnalyticsConsent(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C5A46D] focus:ring-[#C5A46D] cursor-pointer accent-[#C5A46D]"
                  />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Help us understand how visitors interact with our residential project showcases and market guides by
                  collecting aggregated, non-personally identifiable metrics (anonymized IP addresses).
                </p>
              </div>

              {/* Category 3: Marketing Cookies */}
              <div className="p-4 rounded-lg bg-[#102B50]/60 border border-white/10 hover:border-[#C5A46D]/30 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="marketing-toggle" className="font-semibold text-sm text-white cursor-pointer">
                    Marketing &amp; Personalization Cookies
                  </label>
                  <input
                    id="marketing-toggle"
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C5A46D] focus:ring-[#C5A46D] cursor-pointer accent-[#C5A46D]"
                  />
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Used exclusively to tailor relevant residential property updates and avoid repetitive notifications.
                  We never sell your data or share it with unsolicited third parties.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-white/5 rounded-lg text-xs text-gray-300 mb-6">
              <Info className="w-4 h-4 text-[#C5A46D] shrink-0" />
              <span>
                You may revoke or modify these preferences at any time via the &quot;Cookie Preferences&quot; link in our website footer.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto px-4 py-2.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white bg-transparent hover:bg-white/10 border border-gray-600 rounded-md transition-all"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0B1B32] bg-[#C5A46D] hover:bg-[#D4BA88] rounded-md transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Save My Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
