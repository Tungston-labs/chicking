import {
  clearStoredAuthSession,
  loadStoredAuthSession,
  persistAuthSession,
} from "../store/auth/authStorage.js";

const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";
const ACCESS_TOKEN_REFRESH_BUFFER_MS = 15 * 1000;

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, "");

let refreshPromise = null;

const isObject = (value) => typeof value === "object" && value !== null;

const getNestedValue = (payload, keys) => {
  for (const key of keys) {
    if (payload?.[key] !== undefined && payload?.[key] !== null) {
      return payload[key];
    }
  }

  return undefined;
};

export const normalizeAuthSessionPayload = (payload, previousSession = null) => {
  const accessToken = getNestedValue(payload, ["accessToken", "access_token"]) || previousSession?.accessToken || "";
  const refreshToken =
    getNestedValue(payload, ["refreshToken", "refresh_token"]) || previousSession?.refreshToken || "";
  const tokenType = getNestedValue(payload, ["tokenType", "token_type"]) || previousSession?.tokenType || "";
  const expiresIn = Number(getNestedValue(payload, ["expiresIn", "expires_in"]) || previousSession?.expiresIn || 0);
  const expiresAt = expiresIn ? Date.now() + expiresIn * 1000 : previousSession?.expiresAt || null;
  const admin = getNestedValue(payload, ["admin", "profile", "user"]) || previousSession?.admin || null;

  return {
    accessToken,
    admin,
    expiresAt,
    expiresIn,
    refreshToken,
    tokenType,
  };
};

const getStoredAccessToken = () => loadStoredAuthSession()?.accessToken || "";

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
  const isHtmlResponse = contentType.includes("text/html");
  const payload = isJsonResponse ? await response.json() : await response.text();

  if (!response.ok) {
    const error = new Error(extractApiErrorMessage(payload));

    error.data = payload;
    error.status = response.status;

    throw error;
  }

  if (isHtmlResponse) {
    const error = new Error("The server returned HTML instead of JSON. Please verify the API route or server routing.");

    error.data = payload;
    error.status = response.status;

    throw error;
  }

  return payload;
};

const createRequestOptions = ({ accessToken, body, headers, method }) => {
  const requestHeaders = new Headers(headers || {});
  const hasJsonBody = body !== undefined && !(body instanceof FormData);

  requestHeaders.set("Accept", "application/json");

  if (hasJsonBody && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (accessToken && !requestHeaders.has("Authorization")) {
    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }

  return {
    body: hasJsonBody ? JSON.stringify(body) : body,
    headers: requestHeaders,
    method,
  };
};

const rawApiRequest = async (path, options) => {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
  return parseApiResponse(response);
};

const isAccessTokenExpired = (session) =>
  Boolean(session?.expiresAt && session.expiresAt <= Date.now() + ACCESS_TOKEN_REFRESH_BUFFER_MS);

export const refreshAccessToken = async (refreshTokenOverride) => {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const currentSession = loadStoredAuthSession();
      const refreshToken = refreshTokenOverride || currentSession?.refreshToken;

      if (!refreshToken) {
        clearStoredAuthSession();
        throw new Error("Your session has expired. Please login again.");
      }

      try {
        const { refreshToken: requestRefreshToken } = await import("./auth/refreshToken.js");
        const payload = await requestRefreshToken({ refreshToken });
        const nextSession = normalizeAuthSessionPayload(payload, currentSession);

        if (!nextSession.accessToken || !nextSession.refreshToken) {
          clearStoredAuthSession();
          throw new Error("Your session has expired. Please login again.");
        }

        persistAuthSession(nextSession);

        return nextSession;
      } catch (error) {
        clearStoredAuthSession();
        throw error;
      } finally {
        refreshPromise = null;
      }
    })();
  }

  return refreshPromise;
};

const ensureFreshAccessToken = async () => {
  const currentSession = loadStoredAuthSession();

  if (!currentSession?.accessToken && !currentSession?.refreshToken) {
    return "";
  }

  if (!isAccessTokenExpired(currentSession) && currentSession?.accessToken) {
    return currentSession.accessToken;
  }

  const refreshedSession = await refreshAccessToken(currentSession?.refreshToken);

  return refreshedSession.accessToken;
};

export const apiRequest = async (
  path,
  { accessToken, body, headers, method = "GET", requiresAuth = true, retryOnUnauthorized = true } = {}
) => {
  let resolvedAccessToken = accessToken || "";

  if (requiresAuth && !resolvedAccessToken) {
    resolvedAccessToken = await ensureFreshAccessToken();
  }

  try {
    return await rawApiRequest(
      path,
      createRequestOptions({
        accessToken: requiresAuth ? resolvedAccessToken || getStoredAccessToken() : "",
        body,
        headers,
        method,
      })
    );
  } catch (error) {
    if (!requiresAuth || !retryOnUnauthorized || error?.status !== 401) {
      throw error;
    }

    const refreshedSession = await refreshAccessToken();

    return rawApiRequest(
      path,
      createRequestOptions({
        accessToken: refreshedSession.accessToken,
        body,
        headers,
        method,
      })
    );
  }
};

export const hasStoredSession = () => {
  const session = loadStoredAuthSession();
  return Boolean(session?.accessToken || session?.refreshToken);
};

export const hasValidStoredSession = () => {
  const session = loadStoredAuthSession();

  if (!isObject(session)) {
    return false;
  }

  return Boolean(session.accessToken || session.refreshToken);
};
