import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api.js";
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
  debugOtp: storedRecoveryState?.debugOtp || "",
  expiresAt: storedSession?.expiresAt || null,
  expiresIn: storedSession?.expiresIn || 0,
  forgotPasswordEmail: storedRecoveryState?.email || "",
  forgotPasswordError: "",
  forgotPasswordStatus: "idle",
  loginError: "",
  loginStatus: "idle",
  otpExpiresInMinutes: storedRecoveryState?.expiresInMinutes || null,
  resetPasswordError: "",
  resetPasswordStatus: "idle",
  resetToken: storedRecoveryState?.resetToken || "",
  tokenType: storedSession?.tokenType || "",
  verifyOtpError: "",
  verifyOtpStatus: "idle",
};

const getErrorMessage = (error, fallbackMessage) => error?.message || fallbackMessage;

const persistCurrentRecoveryState = (state) => {
  if (
    !state.forgotPasswordEmail &&
    !state.debugOtp &&
    !state.otpExpiresInMinutes &&
    !state.resetToken
  ) {
    clearStoredRecoveryState();
    return;
  }

  persistRecoveryState({
    debugOtp: state.debugOtp,
    email: state.forgotPasswordEmail,
    expiresInMinutes: state.otpExpiresInMinutes,
    resetToken: state.resetToken,
  });
};

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (credentials, { rejectWithValue }) => {
    try {
      return await authApi.login(credentials);
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to login right now."));
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
      state.debugOtp = "";
      state.forgotPasswordEmail = "";
      state.otpExpiresInMinutes = null;
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
      state.accessToken = "";
      state.admin = null;
      state.debugOtp = "";
      state.expiresAt = null;
      state.expiresIn = 0;
      state.forgotPasswordEmail = "";
      state.forgotPasswordError = "";
      state.forgotPasswordStatus = "idle";
      state.tokenType = "";
      state.loginError = "";
      state.loginStatus = "idle";
      state.otpExpiresInMinutes = null;
      state.resetPasswordError = "";
      state.resetPasswordStatus = "idle";
      state.resetToken = "";
      state.verifyOtpError = "";
      state.verifyOtpStatus = "idle";
      clearStoredAuthSession();
      clearStoredRecoveryState();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loginError = "";
        state.loginStatus = "loading";
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        const { accessToken, admin, expiresIn, tokenType } = action.payload;
        const expiresAt = expiresIn ? Date.now() + expiresIn * 1000 : null;

        state.accessToken = accessToken;
        state.admin = admin;
        state.debugOtp = "";
        state.expiresAt = expiresAt;
        state.expiresIn = expiresIn;
        state.forgotPasswordEmail = "";
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "idle";
        state.loginStatus = "succeeded";
        state.otpExpiresInMinutes = null;
        state.resetPasswordError = "";
        state.resetPasswordStatus = "idle";
        state.resetToken = "";
        state.tokenType = tokenType;
        state.verifyOtpError = "";
        state.verifyOtpStatus = "idle";

        persistAuthSession({
          accessToken,
          admin,
          expiresAt,
          expiresIn,
          tokenType,
        });
        clearStoredRecoveryState();
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loginError = action.payload || "Login failed.";
        state.loginStatus = "failed";
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "loading";
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.debugOtp = action.payload.debugOtp || "";
        state.forgotPasswordEmail = action.meta.arg.email;
        state.forgotPasswordStatus = "succeeded";
        state.otpExpiresInMinutes = action.payload.expiresInMinutes || null;
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
        state.resetToken = action.payload.resetToken || "";
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
        state.debugOtp = "";
        state.forgotPasswordEmail = "";
        state.forgotPasswordError = "";
        state.forgotPasswordStatus = "idle";
        state.otpExpiresInMinutes = null;
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
} = authSlice.actions;

export const selectAuthAdmin = (state) => state.auth.admin;
export const selectForgotPasswordEmail = (state) => state.auth.forgotPasswordEmail;
export const selectIsAuthenticated = (state) =>
  Boolean(state.auth.accessToken && (!state.auth.expiresAt || state.auth.expiresAt > Date.now()));
export const selectResetToken = (state) => state.auth.resetToken;
export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
