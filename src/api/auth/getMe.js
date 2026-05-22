import { apiRequest } from "../client.js";

export const getMe = (accessToken) =>
  apiRequest("/auth/me", {
    accessToken,
    method: "GET",
    requiresAuth: true,
  });
