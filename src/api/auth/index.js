import { forgotPassword } from "./forgotPassword.js";
import { getMe } from "./getMe.js";
import { login } from "./login.js";
import { resetPassword } from "./resetPassword.js";
import { verifyOtp } from "./verifyOtp.js";

export const authApi = {
  forgotPassword,
  getMe,
  login,
  resetPassword,
  verifyOtp,
};

export { forgotPassword, getMe, login, resetPassword, verifyOtp };
