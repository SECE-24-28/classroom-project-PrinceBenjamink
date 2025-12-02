import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Sri Eshwar</h1>
      <p>This is the Home page.</p>
      <Link to="/form" style={{ fontSize: "20px", color: "blue", textDecoration: "underline" }}>
        Go to Form Page
      </Link>
    </div>
  );
};

export default Home;
