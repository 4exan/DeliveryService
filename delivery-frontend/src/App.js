import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import LoginPage from "./components/auth/LoginPage";
import RegistrationPage from "./components/auth/RegistrationPage";
import FooterComponent from "./components/common/Footer";
import UserService from "./components/service/UserService";
import UpdateUser from "./components/userspage/UpdateUser";
import UserManagementPage from "./components/userspage/UserManagementPage";
import ProfilePage from "./components/userspage/ProfilePage";
import HomePage from "./components/publicpage/HomePage";
import Dashboard from "./components/userspage/Dashboard";
import { useAuth } from "./components/context/AuthContext.jsx";

export default function App() {
  const { isAuthenticated, isAdmin } = useAuth();

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            {isAuthenticated && (
              <>
                <Route path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/profile" element={<ProfilePage />} />
                <Route
                  path="/package/my-package/incoming"
                  element={<ProfilePage />}
                />
              </>
            )}
            {/* Check if user is authenticated and admin before rendering admin-only routes */}
            {isAdmin && (
              <>
                <Route
                  path="/admin/user-management"
                  element={<UserManagementPage />}
                />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
