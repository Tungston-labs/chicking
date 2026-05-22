import { apiRequest } from "../client.js";

export const login = (payload) =>
  apiRequest("/auth/login", {
    body: payload,
    method: "POST",
    requiresAuth: false,
  });
