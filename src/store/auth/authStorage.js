export const AUTH_SESSION_STORAGE_KEY = "chicking-admin-auth-session-v1";
export const AUTH_RECOVERY_STORAGE_KEY = "chicking-admin-password-recovery-v1";

const canUseStorage = () => typeof window !== "undefined" && window.localStorage;

const readStorageValue = (storageKey) => {
  if (!canUseStorage()) {
    return null;
  }

  const storedValue = window.localStorage.getItem(storageKey);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch {
    window.localStorage.removeItem(storageKey);
    return null;
  }
};

const writeStorageValue = (storageKey, value) => {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify(value));
};

export const clearStoredAuthSession = () => {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
};

export const clearStoredRecoveryState = () => {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(AUTH_RECOVERY_STORAGE_KEY);
};

export const loadStoredAuthSession = () => {
  const storedSession = readStorageValue(AUTH_SESSION_STORAGE_KEY);

  if (!storedSession) {
    return null;
  }

  if (storedSession.expiresAt && storedSession.expiresAt <= Date.now()) {
    clearStoredAuthSession();
    return null;
  }

  return storedSession;
};

export const persistAuthSession = (session) => {
  writeStorageValue(AUTH_SESSION_STORAGE_KEY, session);
};

export const loadStoredRecoveryState = () => {
  const storedRecoveryState = readStorageValue(AUTH_RECOVERY_STORAGE_KEY);

  if (!storedRecoveryState) {
    return null;
  }

  return storedRecoveryState;
};

export const persistRecoveryState = (recoveryState) => {
  writeStorageValue(AUTH_RECOVERY_STORAGE_KEY, recoveryState);
};
