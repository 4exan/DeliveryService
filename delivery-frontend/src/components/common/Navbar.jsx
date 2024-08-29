import React from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";

export default function Navbar() {
  const isAuthenticated = UserService.isAuthenticated();
  const isAdmin = UserService.isAdmin();

  const handleLogout = () => {
    const confirmDelete = window.confirm("Are you sure you want to logout?");
    if (confirmDelete) {
      UserService.logout();
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
