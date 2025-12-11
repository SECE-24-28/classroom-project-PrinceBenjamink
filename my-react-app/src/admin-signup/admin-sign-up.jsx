import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminSignUpComponent = () => {
  const [Admins, setAdmins] = useState([]);

  const getDetails = async () => {
    try {
      const res = await axios.get(
        "http://localhost:21000/api/v1/Admin/findallAdmins"
      );

      setAdmins(res.data.data);
    } catch (e) {
      console.log("Error fetching Admins:", e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/Admin/createAdmin",
        {
          firstName: e.target.firstName.value,
          secondName: e.target.secondName.value,
          email: e.target.email.value,
          mobileNumber: e.target.mobileNumber.value,
          password: e.target.password.value,
        }
      );

      if (pushDetails.data.success) {
        console.log("Admin created successfully");
        e.target.reset();
        getDetails();
      } else {
        console.log("Error:", pushDetails.data.message);
      }
    } catch (e) {
      console.log("Error:", e.message);
    }
  };

  return (
    <div>
      <h2>Admin Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <span> </span>
        <label htmlFor="secondName">Second Name:</label>
        <input type="text" id="secondName" name="secondName" required />

        <span> </span>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <span> </span>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input type="text" id="mobileNumber" name="mobileNumber" required />

        <span> </span>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <span> </span>
        <button type="submit">Sign Up</button>
      </form>

      <hr />

      <h3>All Admins</h3>
      <hr />
      {Admins.map((u) => (
        <div key={u._id}>
          <p>First Name: {u.firstName}</p>
          <p>Second Name: {u.secondName}</p>
          <p>Email: {u.email}</p>
          <p>Mobile Number: {u.mobileNumber}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AdminSignUpComponent;
