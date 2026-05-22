import { apiRequest } from "../client.js";

export const forgotPassword = (payload) =>
  apiRequest("/auth/forgot-password", {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
