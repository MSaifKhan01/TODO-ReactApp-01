// Profile.js
import React from "react";

const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user information here */}
    </div>
  );
};

export default Profile;
