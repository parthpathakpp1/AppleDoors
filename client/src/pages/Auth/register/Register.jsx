import React, { useState } from "react";
import "../authStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LandingFooter from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./Register.css"; 
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 8 characters long and contain at least 1 digit.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validatePassword(password)) {
        return;
      }
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });
      if (res && res.data.success) {
        toast.success("Registered Successfully");
        navigate("/login");
      } else {
        toast.error("Something went wrong");
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
      <ToastContainer />
      <div className="authpage_godparent">
        <div className="authpage_parent">
          <div className="authpage_rightdiv">
          <button  onClick={() => navigate("/")} className="btn authpage_floatingbtn authpage_goback"><div> Go back</div></button>
            <form onSubmit={handleSubmit} className="authform">
              <h1 className="authform_heading">Join Apple Doors</h1>

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
          className={`form-control ${passwordError ? "invalid" : ""}`}
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          required
          placeholder="Password"
        />
           {passwordError && <div className="error-message">{passwordError}</div>}

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

              <div className="authform_container">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                  placeholder="What is your favourite sport"
                />
              </div>

              <button type="submit" className="authpage_submitbtn">
                Submit
              </button>
            </form>
          </div>
          <div className="authpage_leftdiv">
          <button onClick={() => navigate("/login")} className="btn authpage_floatingbtn">Have an account? Login</button>
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default Register;
