import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  authApi,
  clearStoredAuthSession,
  getErrorMessage,
  hydrateSession,
  loadStoredAuthSession,
  refreshAccessToken,
} from "./authHelpers.js";

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
