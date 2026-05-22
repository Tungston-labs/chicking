import { apiRequest } from "../client.js";

export const resetPassword = (payload) =>
  apiRequest("/auth/reset-password", {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
