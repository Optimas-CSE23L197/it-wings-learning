import React, { createContext, useEffect, useState } from "react";
import authApi from "../api/auth.api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // load user token
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setToken(token);
      setUser(JSON.parse(savedUser));
      setIsLogin(true);
    }

    setLoading(false);
  }, []);

  // login function
  const login = async (credentials) => {
    try {
      setError(null);
      setLoading(true);

      const response = await authApi.login(credentials);

      const { token: jwtToken, user: userData } = response;

      // save to state
      setToken(jwtToken);
      setUser(userData);
      setIsLogin(true);

      // save to local storage
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("user", JSON.stringify(userData));

      return { sucess: true };
    } catch (err) {
      setError(err?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
    setIsLogin(false);
  };

  // context value passed to components
  const value = {
    isLogin,
    user,
    token,
    loading,
    error,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
