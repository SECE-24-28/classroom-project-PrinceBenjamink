import React, { useState } from "react";
import { SignupStyle } from "./sign-up-style.js";
const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "sri eshwar",
    passoutYear: "2024",
    department: "CSE",
    ugpg: "UG",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(0);
  const [showConfirmPassword, setShowConfirmPassword] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFormData({ ...formData, firstName: value });
    } else if (name === "lastName") {
      setFormData({ ...formData, lastName: value });
    } else if (name === "college") {
      setFormData({ ...formData, college: value });
    } else if (name === "passoutYear") {
      setFormData({ ...formData, passoutYear: value });
    } else if (name === "department") {
      setFormData({ ...formData, department: value });
    } else if (name === "ugpg") {
      setFormData({ ...formData, ugpg: value });
    } else if (name === "email") {
      setFormData({ ...formData, email: value });
    } else if (name === "mobile") {
      setFormData({ ...formData, mobile: value });
    } else if (name === "password") {
      setFormData({ ...formData, password: value });
    } else if (name === "confirmPassword") {
      setFormData({ ...formData, confirmPassword: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <SignupStyle>
      <div className="signup-wrapper">
        <form id="signupForm" className="signup-container" onSubmit={handleSubmit}>
          <h1 className="signup-title">
            <span className="blue">Welcome to</span>
            <br />
            Aptitude Guru Hem <span className="red">LMS</span>
          </h1>

          <div className="form-section">
            <div className="two-column">
              <div className="input-box">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="education-grid">
              <div className="row">
                <div className="input-box two-five-fourth">
                  <label>Select College</label>
                  <select name="college" value={formData.college} onChange={handleChange}>
                    <option value="AGH B2C">AGH B2C</option>
                    <option value="XYZ College">XYZ College</option>
                    <option value="ABC Institute">ABC Institute</option>
                  </select>
                </div>
                <div className="input-box one-five-fourth">
                  <label>Select Passout Year</label>
                  <select
                    name="passoutYear"
                    value={formData.passoutYear}
                    onChange={handleChange}
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-box two-five-fourth">
                  <label>Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">MECH</option>
                  </select>
                </div>
                <div className="input-box one-five-fourth">
                  <label>UG or PG</label>
                  <select name="ugpg" value={formData.ugpg} onChange={handleChange}>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="two-column">
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>
              <div className="input-box">
                <label>Mobile</label>
                <div className="phone-input">
                  <select>
                    <option>+91</option>
                  </select>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
            </div>

            <div className="two-column">
              <div className="input-box">
                <div className="label-with-toggle">
                  <label>Password</label>
                  <span
                    className="toggle-show"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
                <div className="password-field">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter the password"
                  />
                </div>
                <ul className="password-rules">
                  <li>Minimum 8 characters</li>
                  <li>One lowercase character</li>
                  <li>One uppercase character</li>
                  <li>One number</li>
                  <li>One special character</li>
                </ul>
              </div>

              <div className="input-box">
                <div className="label-with-toggle">
                  <label>Confirm Password</label>
                  <span
                    className="toggle-show"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </span>
                </div>
                <div className="password-field">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter confirm password"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="form-actions-outside">
          <button type="submit" form="signupForm" className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </SignupStyle>
  );
};

export default SignUpComponent;