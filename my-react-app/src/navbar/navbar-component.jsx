import React from "react";
import { Link } from "react-router-dom";
import {NavbarStyle} from "./navbar-style.js";

const NavBar = () => {
  return (
    <NavbarStyle>
    <nav className="navbar">
      {/* <div className="logo">MyWebsite</div> */}
      <ul className="nav-links">
        <li><Link to="/hello">Home</Link></li>
        <li><Link to="/promise">Promise</Link></li>
        <li><Link to="/trusted">Trusted By</Link></li>
        <li><Link to="/excellence/1">Excellence</Link></li>
        <li><Link to="/impact">Impact</Link></li>
        <li><Link to="/user-state">Use State</Link></li>
        <li><Link to="/use-state-form">Form</Link></li>
        <li><Link to="/addition-operation-in-state">Addition in State</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li><Link to="/position">Positioning</Link></li>
      </ul>
    </nav>
    </NavbarStyle>
  );
};

export default NavBar;
