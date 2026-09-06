/**
 * Google Analytics 4 utility
 *
 * Usage:
 *   import { initGA, trackPageView, trackEvent } from './analytics';
 *
 * Set VITE_GA_ID in your .env file to your GA4 Measurement ID (G-XXXXXXXXXX).
 * The module safely no-ops in dev when no ID is provided.
 */

const GA_ID = import.meta.env.VITE_GA_ID;

/** Inject the gtag.js script once and initialise GA4. */
export function initGA() {
  if (!GA_ID || typeof window === 'undefined') return;
  // Avoid double-initialisation
  if (window.__GA_INITIALIZED__) return;
  window.__GA_INITIALIZED__ = true;

  // Inject script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialise dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    // Redact sensitive URL params automatically
    cookie_flags: 'SameSite=None;Secure',
    // Do NOT collect PII
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

/**
 * Track a virtual page view — call on every SPA route change.
 * @param {string} path - e.g. '/' or '/portfolio'
 * @param {string} title - document.title at time of navigation
 */
export function trackPageView(path, title) {
  if (!GA_ID || typeof window?.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

/**
 * Track a custom event.
 * @param {string} eventName - GA4 event name (snake_case recommended)
 * @param {object} [params]  - Optional extra parameters
 */
export function trackEvent(eventName, params = {}) {
  if (!GA_ID || typeof window?.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
