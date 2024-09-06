import React, { useState, useEffect } from "react";
import UserService from "../service/UserService";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      setProfileInfo(response.user);
    } catch (error) {
      console.error("Error fetching profile information:", error);
    }
  };

  return (
    <div className="m-24">
      <h2 className="text-3xl font-semibold mb-5">Profile Information</h2>
      <p>Username: {profileInfo.username}</p>
      <p>Name: {profileInfo.name}</p>
      <p>Email: {profileInfo.email}</p>
      <p>Phone: {profileInfo.phone}</p>
      {profileInfo.role === "ADMIN" && (
        <button className="bg-[#ff2e2e] p-1 rounded-md text-white font-semibold mt-5">
          <Link to={`/update-user/${profileInfo.id}`}>Update profile</Link>
        </button>
      )}
    </div>
  );
}
