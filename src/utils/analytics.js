/**
 * Analytics and Conversion Event Tracking Utility
 */

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  // Push to Google Tag Manager dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
    timestamp: new Date().toISOString(),
  });

  // Push to Google Analytics 4 gtag if initialized
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // Push to Meta Pixel fbq if initialized
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, eventParams);
  }
};

export const trackFormSubmission = (formName = "franchise_form", details = {}) => {
  trackEvent("conversion_form_submit", {
    form_name: formName,
    ...details,
  });

  trackEvent("generate_lead", {
    lead_type: formName,
    currency: "USD",
    value: details.investment || "unspecified",
  });
};
