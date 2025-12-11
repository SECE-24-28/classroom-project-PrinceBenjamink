import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editFirstName, setEditFirstName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userregister",
        {
          firstName: e.target.firstname.value,
          secondName: e.target.secondname.value,
          email: e.target.email.value,
          mobileNumber: e.target.mobileNumber.value,
          password: e.target.password.value,
        }
      );

      if (pushDetails.data.success) {
        console.log("User created successfully");
        getDetails();
        e.target.reset();
      } else {
        console.log("Error:", pushDetails.data.message);
      }
    } catch (e) {
      console.log("Error:", e.message);
    }
  };

  const getDetails = async () => {
    try {
      const res = await axios.get(
        "http://localhost:21000/api/v1/User/getAllUsers"
      );

      setUsers(res.data.data || []);
    } catch (e) {
      console.log("Error fetching users:", e);
    }
  };

  const findUserbyEmail = async () => {
    const email = document.getElementById("searchEmail").value; // get value from input
    if (!email) return;

    try {
      const res = await axios.get(
        `http://localhost:21000/api/v1/User/findUserbyEmail/${email}`
      );
      console.log(res.message);
      console.log("Found user:");
      console.log("First Name:", res.data.data.firstName);
      console.log("Second Name:", res.data.data.secondName);
      console.log("Email:", res.data.data.email);
      console.log("Mobile Number:", res.data.data.mobileNumber);
      console.log("Password:", res.data.data.password);
    } catch (e) {
      console.log("Error finding user by email:", e);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `http://localhost:21000/api/v1/User/deleteUser/${userId}`
      );
      if (res.status === 200) {
        console.log("User deleted successfully");
        getDetails();
      }
    } catch (e) {
      console.log("Error deleting user:", e);
    }
  };

  const updateUser = async () => {
    try {
      const res = await axios.put(
        `http://localhost:21000/api/v1/User/updateUser/${editId}`,
        {
          firstName: editFirstName,
          email: editEmail,
        }
      );

      if (res.status === 200) {
        console.log("User updated successfully");
        setEditId(null);
        setEditFirstName("");
        setEditEmail("");
        getDetails();
      }
    } catch (e) {
      console.log("Error updating user:", e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First name: </label>
        <input type="text" id="firstname" name="firstname" />
        <br />
        <br />

        <label htmlFor="email">Second name: </label>
        <input type="text" id="secondname" name="secondname" />
        <br />
        <br />

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" />
        <br />
        <br />

        <label htmlFor="mobileNumber">Mobile Number: </label>
        <input type="text" id="mobileNumber" name="mobileNumber" />
        <br />
        <br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <h3>Search User by Email</h3>
      <input type="text" id="searchEmail" placeholder="Enter email..." />
      <span style={{ marginLeft: "8px" }}></span>
      <button type="button" onClick={findUserbyEmail}>
        Find
      </button>

      <br />
      <br />

      <div id="user-list" style={{ marginTop: "30px" }}>
        <h3>User List</h3>

        {users.length > 0 ? (
          users.map((u) => (
            <div key={u._id} style={{ marginBottom: "10px" }}>
              {editId === u._id ? (
                <>
                  <input
                    type="text"
                    value={editFirstName}
                    onChange={(e) => setEditFirstName(e.target.value)}
                  />
                  <span style={{ marginLeft: "8px" }}></span>
                  <input
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />

                  <button onClick={updateUser} style={{ marginLeft: "8px" }}>
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    style={{ marginLeft: "8px", color: "orange" }}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  {u.firstName} ― {u.email}
                  <button
                    style={{ marginLeft: "10px", color: "blue" }}
                    onClick={() => {
                      setEditId(u._id);
                      setEditFirstName(u.firstName);
                      setEditEmail(u.email);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "10px", color: "red" }}
                    onClick={() => deleteUser(u._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default SignupFormComponent;
