import React from "react";
import { connect } from "react-redux";
import { LoginAction } from "../ReduxContext/Actions";
import { useNavigate } from "react-router";

import "./SignUp.css";
function Login({ islogin, login }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const emailCheck = localStorage.getItem("email");
    const passwordCheck = localStorage.getItem("password");

    if (emailCheck === "" || !emailCheck || emailCheck !== emailValue) {
      alert("please login with your registered email");
    } else {
      if (
        passwordCheck === "" ||
        !passwordCheck ||
        passwordCheck !== passwordValue
      ) {
        alert("Incorrect Password");
      } else {
        alert("logined in ");
        login();
        navigate("/fetch-auth");
      }
    }
  };
  return (
    <div className="SignUpContainer">
      <h1>Login</h1>
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

export default connect(mapStateToProps, mapStateToDispatch)(Login);
