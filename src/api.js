import { AUTH_SESSION_STORAGE_KEY } from "./store/auth/authStorage.js";

const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, "");

const getStoredAccessToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  const storedSession = window.localStorage.getItem(AUTH_SESSION_STORAGE_KEY);

  if (!storedSession) {
    return "";
  }

  try {
    const parsedSession = JSON.parse(storedSession);

    return parsedSession?.accessToken || "";
  } catch {
    return "";
  }
};

const extractApiErrorMessage = (payload) => {
  if (typeof payload === "string" && payload.trim()) {
    return payload;
  }

  if (payload?.message) {
    return payload.message;
  }

  if (typeof payload?.detail === "string" && payload.detail.trim()) {
    return payload.detail;
  }

  if (Array.isArray(payload?.detail) && payload.detail.length) {
    return payload.detail
      .map((detailItem) => detailItem?.msg)
      .filter(Boolean)
      .join(", ");
  }

  return "Something went wrong. Please try again.";
};

const parseApiResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  const isJsonResponse = contentType.includes("application/json");
  const payload = isJsonResponse ? await response.json() : await response.text();

  if (!response.ok) {
    const error = new Error(extractApiErrorMessage(payload));

    error.data = payload;
    error.status = response.status;

    throw error;
  }

  return payload;
};

export const apiRequest = async (path, { body, headers, method = "GET", requiresAuth = true } = {}) => {
  const requestHeaders = new Headers(headers || {});
  const hasJsonBody = body !== undefined && !(body instanceof FormData);

  requestHeaders.set("Accept", "application/json");

  if (hasJsonBody && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (requiresAuth) {
    const accessToken = getStoredAccessToken();

    if (accessToken && !requestHeaders.has("Authorization")) {
      requestHeaders.set("Authorization", `Bearer ${accessToken}`);
    }
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    body: hasJsonBody ? JSON.stringify(body) : body,
    headers: requestHeaders,
    method,
  });

  return parseApiResponse(response);
};

export const authApi = {
  forgotPassword: (payload) =>
    apiRequest("/auth/forgot-password", {
      body: payload,
      method: "POST",
      requiresAuth: false,
    }),
  login: (payload) =>
    apiRequest("/auth/login", {
      body: payload,
      method: "POST",
      requiresAuth: false,
    }),
  resetPassword: (payload) =>
    apiRequest("/auth/reset-password", {
      body: payload,
      method: "POST",
      requiresAuth: false,
    }),
  verifyOtp: (payload) =>
    apiRequest("/auth/verify-otp", {
      body: payload,
      method: "POST",
      requiresAuth: false,
    }),
};
