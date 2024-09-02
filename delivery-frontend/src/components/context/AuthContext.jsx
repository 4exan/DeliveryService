import React, { createContext, useState, useContext } from "react";
import UserService from "../service/UserService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    UserService.isAuthenticated()
  );
  const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

  const login = () => {
    setIsAuthenticated(true);
    setIsAdmin(UserService.isAdmin());
  };

  const logout = () => {
    UserService.logout();
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
