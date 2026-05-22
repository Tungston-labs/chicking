import { apiRequest } from "../client.js";

export const refreshToken = (payload) =>
  apiRequest("/auth/refresh-token", {
    body: payload,
    method: "POST",
    requiresAuth: false,
    retryOnUnauthorized: false,
  });
