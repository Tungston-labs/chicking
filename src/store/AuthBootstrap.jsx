import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_SESSION_EVENT } from "./auth/authStorage.js";
import { initializeAuthSession, syncStoredSession } from "./auth/authSlice.js";

const AuthBootstrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuthSession());

    const handleSessionChange = (event) => {
      dispatch(syncStoredSession(event.detail));
    };

    window.addEventListener(AUTH_SESSION_EVENT, handleSessionChange);

    return () => {
      window.removeEventListener(AUTH_SESSION_EVENT, handleSessionChange);
    };
  }, [dispatch]);

  return null;
};

export default AuthBootstrap;
