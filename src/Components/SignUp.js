import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LoginAction } from "../ReduxContext/Actions";

import { connect } from "react-redux";
import "./SignUp.css";
function SignUp({ islogin, login }) {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const confirmPasswordValue =
      document.getElementById("confirmpassword").value;
    if (passwordValue !== confirmPasswordValue) {
      alert("Confirm Password and Password are not Same ");
    } else {
      localStorage.setItem("email", emailValue);
      localStorage.setItem("password", passwordValue);
      localStorage.setItem("gender", gender);
      alert("user created");
      login();
      navigate("fetch-auth");
    }
  };

  return (
    <div className="SignUpContainer">
      <h1> Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="EleTag">
          <label>Email</label>
          <input type="email" id="email" />
        </div>
        <div className="EleTag">
          <label>Passowrd</label>
          <input type="password" id="password" />
        </div>
        <div className="EleTag">
          <label> Gender</label>
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "male"}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="EleTag">
          <label>Confirm Password</label>
          <input type="password" id="confirmpassword" />
        </div>

        <div className="EleTag">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { islogin: state.islogin };
};
const mapStateToDispatch = (dispatch) => {
  return {
    login: () => dispatch(LoginAction()),
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(SignUp);
