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
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await UserService.registration(formData, token);

      setFormData({
        username: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        role: "USER",
      });
      alert("User registered successfully");
      navigate("/profile");
    } catch (error) {
      console.log("Registration error: ", error);
      alert("An error occured while registering user");
    }
  };

  return (
    <div className="form-container">
      <h2 className="font-semibold text-2xl text-center">Registration:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <lable>Username:</lable>
          <br></br>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Password:</lable>
          <br></br>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Full name:</lable>
          <br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Email:</lable>
          <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Phone:</lable>
          <br></br>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white border-none rounded-lg w-1/4 m-auto ml-5 mb-2"
        >
          Register
        </button>
      </form>
    </div>
  );
}
