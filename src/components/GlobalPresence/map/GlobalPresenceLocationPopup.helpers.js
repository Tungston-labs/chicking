export const getLocationInquiryHref = (location) =>
  `/franchiseform?country=${encodeURIComponent(location.country || location.place)}`;
