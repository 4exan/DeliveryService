import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  // const isAuthenticated = UserService.isAuthenticated();
  // const isAdmin = UserService.isAdmin();

  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   UserService.isAuthenticated()
  // );
  // const [isAdmin, setIsAdmin] = useState(UserService.isAdmin());

  const { isAuthenticated, isAdmin, logout } = useAuth();

  const handleLogout = () => {
    const confirmDelete = window.confirm("Are you sure you want to logout?");
    if (confirmDelete) {
      logout();
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {!isAuthenticated && (
          <li>
            <Link to="/">Delivery Service</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/user/dashboard">Dashboard</Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/admin/user-management">User Management</Link>
          </li>
        )}
        {isAdmin && (
          <li>
            <Link to="/admin/package">Package info</Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
