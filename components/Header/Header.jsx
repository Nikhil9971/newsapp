import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/login");
  };
  const logout = async () => {
    try {
      await signOut(auth);
      redirect();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Header">
      <div className="Header-logo" onClick={() => navigate("/")}>
        <h2>NEWS APP</h2>
      </div>
      <button
        className="Header-button"
        onClick={auth.currentUser == null ? redirect : logout}>
        {auth.currentUser == null ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Header;
