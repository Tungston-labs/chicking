import { authApi, forgotPassword, getMe, login, resetPassword, verifyOtp } from './auth/index.js';
import * as clientModule from './client.js';

describe('auth API', () => {
  let apiRequestSpy;

  beforeEach(() => {
    apiRequestSpy = jest.spyOn(clientModule, 'apiRequest').mockResolvedValue({ success: true });
  });

  afterEach(() => {
    apiRequestSpy.mockRestore();
  });

  it('exports all auth functions in authApi object', () => {
    expect(authApi.login).toBe(login);
    expect(authApi.forgotPassword).toBe(forgotPassword);
    expect(authApi.getMe).toBe(getMe);
    expect(authApi.resetPassword).toBe(resetPassword);
    expect(authApi.verifyOtp).toBe(verifyOtp);
  });

  it('calls login endpoint correctly', async () => {
    const payload = { email: 'admin@test.com', password: 'secretpassword' };
    await login(payload);

    expect(apiRequestSpy).toHaveBeenCalledWith('/auth/login', {
      body: payload,
      method: 'POST',
      requiresAuth: false,
    });
  });

  it('calls forgotPassword endpoint correctly', async () => {
    await forgotPassword({ email: 'admin@test.com' });

    expect(apiRequestSpy).toHaveBeenCalledWith('/auth/forgot-password', {
      body: { email: 'admin@test.com' },
      method: 'POST',
      requiresAuth: false,
    });
  });

  it('calls getMe endpoint correctly', async () => {
    await getMe('test-token');

    expect(apiRequestSpy).toHaveBeenCalledWith('/auth/me', {
      accessToken: 'test-token',
      method: 'GET',
      requiresAuth: true,
    });
  });

  it('calls resetPassword endpoint correctly', async () => {
    const payload = { token: 't123', newPassword: 'newpass' };
    await resetPassword(payload);

    expect(apiRequestSpy).toHaveBeenCalledWith('/auth/reset-password', {
      body: payload,
      method: 'POST',
      requiresAuth: false,
    });
  });

  it('calls verifyOtp endpoint correctly', async () => {
    const payload = { email: 'admin@test.com', otp: '123456' };
    await verifyOtp(payload);

    expect(apiRequestSpy).toHaveBeenCalledWith('/auth/verify-otp', {
      body: payload,
      method: 'POST',
      requiresAuth: false,
    });
  });
});
