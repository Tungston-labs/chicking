import authReducer, {
  clearLoginFeedback,
  logoutAdmin,
  selectIsAuthenticated,
} from './authSlice.js';

describe('authSlice reducer', () => {
  const initialTestState = {
    accessToken: 'test-token',
    refreshToken: 'test-refresh-token',
    admin: { id: 1, name: 'Admin' },
    authBootstrapStatus: 'succeeded',
    forgotPasswordEmail: '',
    forgotPasswordError: '',
    forgotPasswordStatus: 'idle',
    loginError: 'Invalid credentials',
    loginStatus: 'failed',
    resetPasswordError: '',
    resetPasswordStatus: 'idle',
    resetToken: '',
    verifyOtpError: '',
    verifyOtpStatus: 'idle',
  };

  it('should clear login feedback when clearLoginFeedback action is dispatched', () => {
    const nextState = authReducer(initialTestState, clearLoginFeedback());
    expect(nextState.loginError).toBe('');
    expect(nextState.loginStatus).toBe('idle');
  });

  it('should reset auth state when logoutAdmin action is dispatched', () => {
    const nextState = authReducer(initialTestState, logoutAdmin());
    expect(nextState.accessToken).toBe('');
    expect(nextState.refreshToken).toBe('');
    expect(selectIsAuthenticated({ auth: nextState })).toBe(false);
    expect(nextState.authBootstrapStatus).toBe('succeeded');
  });
});
