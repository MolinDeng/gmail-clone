import React, { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, colRef, db } from "./firebase";
import { addDoc, Timestamp, writeBatch, doc } from "firebase/firestore";
import GoogleIcon from "@mui/icons-material/Google";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { testdata } from "./testdata";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  // ! useForm
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = data.user + "@gcmail.com";
    const pw = data.password;
    if (!isRegister) {
      signInWithEmailAndPassword(auth, email, pw).catch((err) => alert(err));
    } else {
      createUserWithEmailAndPassword(auth, email, pw)
        .then(() => {
          addDoc(colRef, {
            sender: "demo@gcmail.com",
            to: email,
            subject: "Welcome to Gmail clone",
            content: "Welcome to Gmail clone! Hope you have a nice day 😊",
            time: Timestamp.now().toDate().toDateString(),
            createAt: Timestamp.now(),
            unread: true,
          });
        })
        .catch((err) => alert(err));
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-email-input">
          <input
            {...register("user")}
            placeholder="Email"
            type="text"
            minLength={2}
            maxLength={20}
            pattern="[a-z0-9]+[._\-]*[a-z0-9]+"
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
            setIsRegister(!isRegister);
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
            createUserWithEmailAndPassword(auth, "demo@gcmail.com", "123456")
              .then(() => {
                // ! test code: generate random mail list
                const batch = writeBatch(db);

                testdata.forEach((mail) => {
                  let docRef = doc(colRef); //automatically generate unique id
                  batch.set(docRef, mail);
                });
                batch.commit();
              })
              .catch((err) => {
                if (err.code === "auth/email-already-in-use")
                  signInWithEmailAndPassword(
                    auth,
                    "demo@gcmail.com",
                    "123456"
                  ).catch((error) => alert(error));
                else {
                  alert(err);
                }
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
