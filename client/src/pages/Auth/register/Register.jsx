import React, { useState } from "react";
import "../authStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LandingFooter from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        navigate("/login");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <Header />
      <div className="authpage_godparent">
        <div className="authpage_parent">
          <div className="authpage_rightdiv">
            <form onSubmit={handleSubmit} className="authform">
              <h1 className="">Join Apple Doors</h1>

              <div className="authform_container">
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full Name"
                />
              </div>

              <div className="authform_container">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="authform_container">
                <input
                  type={passwordType}
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={passwordToggle}
                  className="toggle-button"
                >
                  {passwordType === "password" ? "Show" : "Hide"}
                </button>
              </div>

              <div className="authform_container">
                <textarea
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Address"
                />
              </div>

              <div className="authform_container">
                <input
                  type="tel"
                  maxLength="10"
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="Phone Number"
                />
              </div>

              <button type="submit" className="authpage_submitbtn">
                Submit
              </button>
            </form>
          </div>
          <div className="authpage_leftdiv">
            <img
              src="https://milanhub.org/assets/authbannerimg-90821bd2.webp"
              alt="Auth Banner"
            />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default Register;
