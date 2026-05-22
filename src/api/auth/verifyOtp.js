import { apiRequest } from "../client.js";

export const verifyOtp = (payload) =>
  apiRequest("/auth/verify-otp", {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
