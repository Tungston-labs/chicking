export const AUTH_SESSION_STORAGE_KEY = "chicking-admin-auth-session-v1";
export const AUTH_RECOVERY_STORAGE_KEY = "chicking-admin-password-recovery-v1";
export const AUTH_SESSION_EVENT = "chicking-admin-auth-session-change";

const canUseStorage = () => typeof window !== "undefined" && window.localStorage;

const emitSessionEvent = (session) => {
  if (typeof window === "undefined") {
    return;
  }

  queueMicrotask(() => {
    window.dispatchEvent(
      new CustomEvent(AUTH_SESSION_EVENT, {
        detail: session || null,
      })
    );
  });
};

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
  emitSessionEvent(null);
};

export const clearStoredRecoveryState = () => {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.removeItem(AUTH_RECOVERY_STORAGE_KEY);
};

export const loadStoredAuthSession = () => readStorageValue(AUTH_SESSION_STORAGE_KEY);

export const persistAuthSession = (session) => {
  writeStorageValue(AUTH_SESSION_STORAGE_KEY, session);
  emitSessionEvent(session);
};

export const loadStoredRecoveryState = () => readStorageValue(AUTH_RECOVERY_STORAGE_KEY);

export const persistRecoveryState = (recoveryState) => {
  writeStorageValue(AUTH_RECOVERY_STORAGE_KEY, recoveryState);
};
