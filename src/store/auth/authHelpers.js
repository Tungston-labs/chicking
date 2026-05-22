import { authApi, hasStoredSession, normalizeAuthSessionPayload, refreshAccessToken } from "../../api/index.js";
import {
  clearStoredAuthSession,
  clearStoredRecoveryState,
  loadStoredAuthSession,
  loadStoredRecoveryState,
  persistAuthSession,
  persistRecoveryState,
} from "./authStorage.js";

const storedSession = loadStoredAuthSession();
const storedRecoveryState = loadStoredRecoveryState();

export const initialState = {
  accessToken: storedSession?.accessToken || "",
  admin: storedSession?.admin || null,
  authBootstrapStatus: hasStoredSession() ? "loading" : "succeeded",
  expiresAt: storedSession?.expiresAt || null,
  expiresIn: storedSession?.expiresIn || 0,
  forgotPasswordEmail: storedRecoveryState?.email || "",
  forgotPasswordError: "",
  forgotPasswordStatus: "idle",
  loginError: "",
  loginStatus: "idle",
  refreshToken: storedSession?.refreshToken || "",
  resetPasswordError: "",
  resetPasswordStatus: "idle",
  resetToken: storedRecoveryState?.resetToken || "",
  tokenType: storedSession?.tokenType || "",
  verifyOtpError: "",
  verifyOtpStatus: "idle",
};

export const getErrorMessage = (error, fallbackMessage) => error?.message || fallbackMessage;

export const persistCurrentRecoveryState = (state) => {
  if (!state.forgotPasswordEmail && !state.resetToken) {
    clearStoredRecoveryState();
    return;
  }

  persistRecoveryState({
    email: state.forgotPasswordEmail,
    resetToken: state.resetToken,
  });
};

export const applySessionToState = (state, session) => {
  state.accessToken = session?.accessToken || "";
  state.admin = session?.admin || null;
  state.expiresAt = session?.expiresAt || null;
  state.expiresIn = session?.expiresIn || 0;
  state.refreshToken = session?.refreshToken || "";
  state.tokenType = session?.tokenType || "";
};

export const clearSessionState = (state) => {
  applySessionToState(state, null);
};

export const hydrateSession = async (payload, previousSession = null) => {
  const normalizedSession = normalizeAuthSessionPayload(payload, previousSession);

  if (!normalizedSession.accessToken) {
    throw new Error("Access token was not returned by the server.");
  }

  if (!normalizedSession.refreshToken) {
    throw new Error("Refresh token was not returned by the server.");
  }

  const admin = normalizedSession.admin || (await authApi.getMe(normalizedSession.accessToken));

  return {
    ...normalizedSession,
    admin,
  };
};

export {
  authApi,
  clearStoredAuthSession,
  clearStoredRecoveryState,
  hasStoredSession,
  loadStoredAuthSession,
  persistAuthSession,
  refreshAccessToken,
};
