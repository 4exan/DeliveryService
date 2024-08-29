import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    role: "USER",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const userData = await UserService.registration(formData, token);

      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        role: "USER",
      });
      alert("User registered successfully");
      navigate("/admin/user-management");
    } catch (error) {
      console.log("Registration error: ", error);
      alert("An error occured while registering user");
    }
  };

  return (
    <div className="auth-container">
      <h2>Registration:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <lable>Username:</lable>
          <input
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <lable>Password:</lable>
          <input
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <lable>Full name:</lable>
          <input
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <lable>Email:</lable>
          <input
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <lable>Phone:</lable>
          <input
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
