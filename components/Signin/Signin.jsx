import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import userState from "../../Store/user";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { FcGoogle } from "react-icons/fc";
import { googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let [user, setUser] = useRecoilState(userState);
  let navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const googleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="auth_header">
        <h1>News App</h1>
      </div>
      <div className="Auth">
        <div id="auth_header">Create your account</div>
        <div id="auth_description">
          Already registered? <Link to="/login">Log in</Link>
        </div>
        <hr />
        <form action="POST">
          <div id="form_email">
            <label>Email Address</label>
            <input
              type="text"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div id="form_email">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
        </form>
        <button id="auth_btn" onClick={handleSubmit}>
          Create account
        </button>
        <Divider id="divider">Or</Divider>
        <button id="google_btn" onClick={googleAuth}>
          <FcGoogle id="google_icon" />
          Continue with Google
        </button>
      </div>
    </>
  );
};

export default Signin;
