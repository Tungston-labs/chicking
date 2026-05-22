import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, hasStoredSession, normalizeAuthSessionPayload, refreshAccessToken } from "../../api.js";
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

const initialState = {
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

const getErrorMessage = (error, fallbackMessage) => error?.message || fallbackMessage;

const persistCurrentRecoveryState = (state) => {
  if (!state.forgotPasswordEmail && !state.resetToken) {
    clearStoredRecoveryState();
    return;
  }

  persistRecoveryState({
    email: state.forgotPasswordEmail,
    resetToken: state.resetToken,
  });
};

const applySessionToState = (state, session) => {
  state.accessToken = session?.accessToken || "";
  state.admin = session?.admin || null;
  state.expiresAt = session?.expiresAt || null;
  state.expiresIn = session?.expiresIn || 0;
  state.refreshToken = session?.refreshToken || "";
  state.tokenType = session?.tokenType || "";
};

const clearSessionState = (state) => {
  applySessionToState(state, null);
};

const hydrateSession = async (payload, previousSession = null) => {
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

export const initializeAuthSession = createAsyncThunk(
  "auth/initializeAuthSession",
  async (_, { rejectWithValue }) => {
    const currentSession = loadStoredAuthSession();

    if (!currentSession?.accessToken && !currentSession?.refreshToken) {
      return null;
    }

    try {
      let nextSession = currentSession;

      if (!currentSession.accessToken || (currentSession.expiresAt && currentSession.expiresAt <= Date.now())) {
        nextSession = await refreshAccessToken(currentSession.refreshToken);
      }

      return await hydrateSession(nextSession, currentSession);
    } catch (error) {
      clearStoredAuthSession();
      return rejectWithValue(getErrorMessage(error, "Your session has expired. Please login again."));
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (credentials, { rejectWithValue }) => {
    try {
      const loginResponse = await authApi.login(credentials);
      return await hydrateSession(loginResponse);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to login right now."));
    }
  }
);

export const refreshAdminSession = createAsyncThunk(
  "auth/refreshAdminSession",
  async (_, { rejectWithValue }) => {
    try {
      const refreshedSession = await refreshAccessToken();
      return await hydrateSession(refreshedSession, loadStoredAuthSession());
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Your session has expired. Please login again."));
    }
  }
);

export const requestPasswordReset = createAsyncThunk(
  "auth/requestPasswordReset",
  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.forgotPassword(payload);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to request a password reset right now."));
    }
  }
);

export const verifyPasswordOtp = createAsyncThunk(
  "auth/verifyPasswordOtp",
  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.verifyOtp(payload);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to verify the OTP right now."));
    }
  }
);

export const submitNewPassword = createAsyncThunk(
  "auth/submitNewPassword",
  async (payload, { rejectWithValue }) => {
    try {
      return await authApi.resetPassword(payload);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to reset the password right now."));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearForgotPasswordFeedback: (state) => {
      state.forgotPasswordError = "";
      state.forgotPasswordStatus = "idle";
    },
    clearLoginFeedback: (state) => {
      state.loginError = "";
      state.loginStatus = "idle";
    },
    clearPasswordRecoveryFlow: (state) => {
      state.forgotPasswordEmail = "";
      state.resetToken = "";
      state.verifyOtpError = "";
      state.verifyOtpStatus = "idle";
      state.forgotPasswordError = "";
      state.forgotPasswordStatus = "idle";
      state.resetPasswordError = "";
      state.resetPasswordStatus = "idle";
      clearStoredRecoveryState();
    },
    clearResetPasswordFeedback: (state) => {
      state.resetPasswordError = "";
      state.resetPasswordStatus = "idle";
    },
    clearVerifyOtpFeedback: (state) => {
      state.verifyOtpError = "";
      state.verifyOtpStatus = "idle";
    },
    logoutAdmin: (state) => {
      clearSessionState(state);
      state.authBootstrapStatus = "succeeded";
      state.forgotPasswordEmail = "";
      state.forgotPasswordError = "";
      state.forgotPasswordStatus = "idle";
      state.loginError = "";
      state.loginStatus = "idle";
      state.resetPasswordError = "";
      state.resetPasswordStatus = "idle";
      state.resetToken = "";
      state.verifyOtpError = "";
      state.verifyOtpStatus = "idle";
      clearStoredAuthSession();
      clearStoredRecoveryState();
    },
    syncStoredSession: (state, action) => {
      applySessionToState(state, action.payload);
      state.authBootstrapStatus = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuthSession.pending, (state) => {
        state.authBootstrapStatus = "loading";
      })
      .addCase(initializeAuthSession.fulfilled, (state, action) => {
        applySessionToState(state, action.payload);
        state.authBootstrapStatus = "succeeded";
      })
      .addCase(initializeAuthSession.rejected, (state) => {
        clearSessionState(state);
        state.authBootstrapStatus = "succeeded";
      })
      .addCase(loginAdmin.pending, (state) => {
        state.loginError = "";
        state.loginStatus = "loading";
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        applySessionToState(state, action.payload);
        state.authBootstrapStatus = "succeeded";
        state.forgotPasswordEmail = "";
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "idle";
        state.loginStatus = "succeeded";
        state.resetPasswordError = "";
        state.resetPasswordStatus = "idle";
        state.resetToken = "";
        state.verifyOtpError = "";
        state.verifyOtpStatus = "idle";

        persistAuthSession(action.payload);
        clearStoredRecoveryState();
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loginError = action.payload || "Login failed.";
        state.loginStatus = "failed";
      })
      .addCase(refreshAdminSession.fulfilled, (state, action) => {
        applySessionToState(state, action.payload);
        state.authBootstrapStatus = "succeeded";
      })
      .addCase(refreshAdminSession.rejected, (state) => {
        clearSessionState(state);
        state.authBootstrapStatus = "succeeded";
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "loading";
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.forgotPasswordEmail = action.meta.arg.email;
        state.forgotPasswordStatus = "succeeded";
        state.resetPasswordError = "";
        state.resetPasswordStatus = "idle";
        state.resetToken = "";
        state.verifyOtpError = "";
        state.verifyOtpStatus = "idle";
        persistCurrentRecoveryState(state);
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.forgotPasswordError = action.payload || "Password reset request failed.";
        state.forgotPasswordStatus = "failed";
      })
      .addCase(verifyPasswordOtp.pending, (state) => {
        state.verifyOtpError = "";
        state.verifyOtpStatus = "loading";
      })
      .addCase(verifyPasswordOtp.fulfilled, (state, action) => {
        state.resetToken = action.payload.resetToken || action.payload.reset_token || "";
        state.verifyOtpStatus = "succeeded";
        persistCurrentRecoveryState(state);
      })
      .addCase(verifyPasswordOtp.rejected, (state, action) => {
        state.verifyOtpError = action.payload || "OTP verification failed.";
        state.verifyOtpStatus = "failed";
      })
      .addCase(submitNewPassword.pending, (state) => {
        state.resetPasswordError = "";
        state.resetPasswordStatus = "loading";
      })
      .addCase(submitNewPassword.fulfilled, (state) => {
        state.forgotPasswordEmail = "";
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "idle";
        state.resetPasswordStatus = "succeeded";
        state.resetToken = "";
        state.verifyOtpError = "";
        state.verifyOtpStatus = "idle";
        clearStoredRecoveryState();
      })
      .addCase(submitNewPassword.rejected, (state, action) => {
        state.resetPasswordError = action.payload || "Password reset failed.";
        state.resetPasswordStatus = "failed";
      });
  },
});

export const {
  clearForgotPasswordFeedback,
  clearLoginFeedback,
  clearPasswordRecoveryFlow,
  clearResetPasswordFeedback,
  clearVerifyOtpFeedback,
  logoutAdmin,
  syncStoredSession,
} = authSlice.actions;

export const selectAuthAdmin = (state) => state.auth.admin;
export const selectAuthBootstrapStatus = (state) => state.auth.authBootstrapStatus;
export const selectForgotPasswordEmail = (state) => state.auth.forgotPasswordEmail;
export const selectIsAuthenticated = (state) =>
  Boolean(state.auth.accessToken || state.auth.refreshToken);
export const selectResetToken = (state) => state.auth.resetToken;
export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
