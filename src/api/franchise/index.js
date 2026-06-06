import { apiRequest } from "../client.js";

export const FRANCHISE_ENQUIRY_EMAIL = "franchise@chickingglobal.com";

const FRANCHISE_ENQUIRY_ENDPOINT =
  import.meta.env.VITE_FRANCHISE_ENQUIRY_ENDPOINT || "/franchise-enquiries";

const appendFormValue = (payload, key, value) => {
  if (value !== undefined && value !== null && value !== "") {
    payload.append(key, value);
  }
};

const levelOfInterestLabels = {
  master: "Master Franchise",
  unit: "Unit Ownership",
};

export const submitFranchiseEnquiry = ({ formData, interest, ...flatPayload }) => {
  const enquiry = formData || {
    fullName: flatPayload.fullName,
    email: flatPayload.email,
    phone: flatPayload.phone || flatPayload.phoneNumber,
    country: flatPayload.country,
    investment: flatPayload.investment || flatPayload.investmentCapacity,
    additionalInfo: flatPayload.additionalInfo,
    file: flatPayload.file || flatPayload.documentUpload,
  };
  const selectedInterest = interest || flatPayload.levelOfInterest;
  const payload = new FormData();

  appendFormValue(payload, "fullName", enquiry.fullName?.trim());
  appendFormValue(payload, "email", enquiry.email?.trim());
  appendFormValue(payload, "phoneNumber", enquiry.phone?.trim());
  appendFormValue(payload, "country", enquiry.country?.trim());
  appendFormValue(
    payload,
    "levelOfInterest",
    levelOfInterestLabels[selectedInterest] || selectedInterest,
  );
  appendFormValue(payload, "investmentCapacity", enquiry.investment);
  appendFormValue(payload, "additionalInfo", enquiry.additionalInfo?.trim());
  appendFormValue(payload, "documentUpload", enquiry.file);

  return apiRequest(FRANCHISE_ENQUIRY_ENDPOINT, {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
};
