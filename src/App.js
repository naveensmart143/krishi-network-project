import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import { connect } from "react-redux";
import { LogoutAction } from "./ReduxContext/Actions";
function App({ islogin, logout }) {
  const navigate = useNavigate();

  const [login, setlogin] = useState(false);
  const handlelogin = () => {
    setlogin((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="navContainer">
        {login && !islogin && (
          <button
            onClick={() => {
              navigate("/login");
              handlelogin();
            }}
          >
            Login
          </button>
        )}
        {!login && !islogin && (
          <button
            onClick={() => {
              navigate("/signup");
              handlelogin();
            }}
          >
            {" "}
            SignUp
          </button>
        )}

        <button
          onClick={() => {
            islogin ? navigate("fetch-auth") : navigate("/fetch_normal");
          }}
        >
          Home
        </button>
        {islogin && (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        )}
      </div>

      <Routes>
        <Route path="fetch_normal" element={<Home />} />
        {islogin && <Route path="fetch-auth" element={<Home />} />}

        <Route path="signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    islogin: state.islogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(LogoutAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
