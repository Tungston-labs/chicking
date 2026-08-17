import {
  API_BASE_URL,
  normalizeAuthSessionPayload,
  hasStoredSession,
  hasValidStoredSession,
  apiRequest,
} from './client.js';

describe('api client', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('exports API_BASE_URL', () => {
    expect(API_BASE_URL).toBeDefined();
  });

  describe('normalizeAuthSessionPayload', () => {
    it('normalizes session payload with camelCase and snake_case fields', () => {
      const payload = {
        access_token: 'token123',
        refresh_token: 'refresh456',
        expires_in: 3600,
        user: { name: 'Admin' },
      };

      const normalized = normalizeAuthSessionPayload(payload);
      expect(normalized.accessToken).toBe('token123');
      expect(normalized.refreshToken).toBe('refresh456');
      expect(normalized.expiresIn).toBe(3600);
      expect(normalized.admin).toEqual({ name: 'Admin' });
      expect(normalized.expiresAt).toBeGreaterThan(Date.now());
    });

    it('falls back to previousSession values when fields are missing', () => {
      const previousSession = {
        accessToken: 'oldToken',
        refreshToken: 'oldRefresh',
        tokenType: 'Bearer',
        expiresIn: 1800,
        expiresAt: 123456789,
        admin: { name: 'PreviousAdmin' },
      };

      const normalized = normalizeAuthSessionPayload({}, previousSession);
      expect(normalized.accessToken).toBe('oldToken');
      expect(normalized.refreshToken).toBe('oldRefresh');
      expect(normalized.admin).toEqual({ name: 'PreviousAdmin' });
    });
  });

  describe('hasStoredSession and hasValidStoredSession', () => {
    it('returns false when localStorage is empty', () => {
      expect(hasStoredSession()).toBe(false);
      expect(hasValidStoredSession()).toBe(false);
    });

    it('returns true when valid session is stored in localStorage', () => {
      const session = { accessToken: 'abc', refreshToken: 'def' };
      localStorage.setItem('chicking-admin-auth-session-v1', JSON.stringify(session));

      expect(hasStoredSession()).toBe(true);
      expect(hasValidStoredSession()).toBe(true);
    });
  });

  describe('apiRequest', () => {
    it('makes a successful unauthenticated GET request', async () => {
      const mockResponse = { data: 'success' };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        headers: { get: () => 'application/json' },
        json: async () => mockResponse,
      });

      const result = await apiRequest('/test-endpoint', { requiresAuth: false });
      expect(result).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_BASE_URL}/test-endpoint`,
        expect.objectContaining({ method: 'GET' })
      );
    });

    it('throws error when response is not ok', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        headers: { get: () => 'application/json' },
        json: async () => ({ message: 'Bad request' }),
      });

      await expect(apiRequest('/fail-endpoint', { requiresAuth: false })).rejects.toThrow('Bad request');
    });
  });
});
