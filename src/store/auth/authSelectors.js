export const selectAuthAdmin = (state) => state.auth.admin;
export const selectAuthBootstrapStatus = (state) => state.auth.authBootstrapStatus;
export const selectForgotPasswordEmail = (state) => state.auth.forgotPasswordEmail;
export const selectIsAuthenticated = (state) => Boolean(state.auth.accessToken || state.auth.refreshToken);
export const selectResetToken = (state) => state.auth.resetToken;
export const selectAuthState = (state) => state.auth;
