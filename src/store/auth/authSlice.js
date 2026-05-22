import { createSlice } from "@reduxjs/toolkit";
import {
  applySessionToState,
  clearStoredAuthSession,
  clearStoredRecoveryState,
  clearSessionState,
  initialState,
  persistCurrentRecoveryState,
  persistAuthSession,
} from "./authHelpers.js";
import {
  initializeAuthSession,
  loginAdmin,
  refreshAdminSession,
  requestPasswordReset,
  submitNewPassword,
  verifyPasswordOtp,
} from "./authThunks.js";
import {
  selectAuthAdmin,
  selectAuthBootstrapStatus,
  selectAuthState,
  selectForgotPasswordEmail,
  selectIsAuthenticated,
  selectResetToken,
} from "./authSelectors.js";

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

export {
  initializeAuthSession,
  loginAdmin,
  refreshAdminSession,
  requestPasswordReset,
  selectAuthAdmin,
  selectAuthBootstrapStatus,
  selectAuthState,
  selectForgotPasswordEmail,
  selectIsAuthenticated,
  selectResetToken,
  submitNewPassword,
  verifyPasswordOtp,
};

export default authSlice.reducer;
