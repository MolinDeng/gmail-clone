import React from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login({ isRegister }) {
  // ! useForm
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email + "@gcmail.com";
    const pw = data.password;
    if (!isRegister) {
      signInWithEmailAndPassword(auth, email, pw)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, pw)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="login">
      <div className="login-header">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-1024.png"
          alt=""
        />
        <GoogleIcon color="primary" />
        <h1> cmail</h1>
      </div>
      <form action="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-email-input">
          <input
            {...register("email")}
            placeholder="Email"
            type="text"
            minLength={2}
            maxLength={20}
            pattern="[a-zA-Z0-9]+"
            required
          />
          <p>@gcmail.com</p>
        </div>

        <input
          {...register("password")}
          className="login-pw-input"
          placeholder="Password"
          type="password"
          required
          minLength="6"
        />
        <Button type="submit">{isRegister ? "Create" : "Sign In"}</Button>
      </form>
      <p>
        {isRegister ? "Already a member" : "Not a member"}
        {"? "}
        <span
          className="login-register"
          onClick={() => {
            if (isRegister) navigate("/");
            else navigate("/register");
          }}
        >
          {isRegister ? "Sign In" : "Register Now"}
        </span>{" "}
      </p>
      <p>
        Sign in with demo account.{" "}
        <span
          className="login-register"
          onClick={() => {
            signInWithEmailAndPassword(auth, "demo@gcmail.com", "123456")
              .then(() => {
                navigate("/");
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          Click Here
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
