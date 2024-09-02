import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    city: "",
  });

  useEffect(() => {
    fetchUserDataById(userId); // Pass the userId to fetchUserDataById
  }, [userId]); //wheen ever there is a chane in userId, run this

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      const { name, email, role, city } = response.ourUsers;
      setUserData({ name, email, role, city });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmDelete) {
        const token = localStorage.getItem("token");
        const res = await UserService.updateUser(userId, userData, token);
        console.log(res);
        // Redirect to profile page or display a success message
        navigate("/admin/user-management");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      alert(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <lable>Username:</lable>
          <br></br>
          <input
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Full name:</lable>
          <br></br>
          <input
            type="text"
            value={userData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Email:</lable>
          <br></br>
          <input
            type="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Phone:</lable>
          <br></br>
          <input
            type="text"
            value={userData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <lable>Role:</lable>
          <br></br>
          <input
            type="text"
            value={userData.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-item">
          <button className="action-btn" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
