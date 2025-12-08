import React, { useState } from "react";
import { SignupStyle } from "./sign-up-style.js";

const SignUpComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [college, setCollege] = useState("AGH B2C");
  const [passoutYear, setPassoutYear] = useState("2024");
  const [department, setDepartment] = useState("CSE");
  const [ugpg, setUgpg] = useState("UG");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "college":
        setCollege(value);
        break;
      case "passoutYear":
        setPassoutYear(value);
        break;
      case "department":
        setDepartment(value);
        break;
      case "ugpg":
        setUgpg(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College:", college);
    console.log("Passout Year:", passoutYear);
    console.log("Department:", department);
    console.log("UG/PG:", ugpg);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <SignupStyle>
      <div className="signup-wrapper">
        <form
          id="signupForm"
          className="signup-container"
          onSubmit={handleSubmit}
        >
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
                  value={firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                />
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="education-grid">
              <div className="row">
                <div className="input-box two-five-fourth">
                  <label>Select College</label>
                  <select name="college" value={college} onChange={handleChange}>
                    <option value="AGH B2C">AGH B2C</option>
                    <option value="XYZ College">XYZ College</option>
                    <option value="ABC Institute">ABC Institute</option>
                  </select>
                </div>
                <div className="input-box one-five-fourth">
                  <label>Select Passout Year</label>
                  <select
                    name="passoutYear"
                    value={passoutYear}
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
                    value={department}
                    onChange={handleChange}
                  >
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="MECH">MECH</option>
                  </select>
                </div>
                <div className="input-box one-five-fourth">
                  <label>UG or PG</label>
                  <select name="ugpg" value={ugpg} onChange={handleChange}>
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
                  value={email}
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
                    value={mobile}
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
                    value={password}
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
                    value={confirmPassword}
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
