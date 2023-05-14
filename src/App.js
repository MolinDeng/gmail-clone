import React, { useEffect } from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MailList from "./MailList";
import SingleMailPage from "./SingleMailPage";
import Draft from "./Draft";
import { useDispatch, useSelector } from "react-redux";
import { selectDraft } from "./features/mailSlice";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const draftOpen = useSelector(selectDraft);
  const account = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signed in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          })
        );
      } else {
        // user signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        {!account ? (
          <Routes>
            <Route path="/" element={<Login />} />
            {/* just for protection */}
            <Route path="/mail" element={<Login />} />
            <Route path="register" element={<Login isRegister={true} />} />
          </Routes>
        ) : (
          <>
            <Leftbar />
            <div className="app-main">
              <Header />
              <div className="app-body">
                <Navi />
                <div className="app-inner">
                  <Routes>
                    <Route path="/" element={<MailList />} />
                    <Route path="/mail" element={<SingleMailPage />} />
                  </Routes>
                </div>
              </div>
            </div>
            {draftOpen && <Draft />}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
