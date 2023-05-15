import React, { useEffect } from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import SingleMailPage from "./SingleMailPage";
import Draft from "./Draft";
import { useDispatch, useSelector } from "react-redux";
import { selectDraft, selectNaviIndex } from "./features/mailSlice";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Inbox from "./Inbox";
import Sentbox from "./Sentbox";

function App() {
  const draftOpen = useSelector(selectDraft);
  const account = useSelector(selectUser);
  const naviIndex = useSelector(selectNaviIndex);
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
    <div className="app">
      {!account ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Leftbar />
          <div className="app-main">
            <Header />
            <div className="app-body">
              <Navi />
              <div className="app-inner">
                <Routes>
                  {/* default route to "/inbox" */}
                  <Route
                    path="/"
                    element={
                      <Navigate
                        to={naviIndex === 0 ? "/inbox" : "/sent"}
                        replace={true}
                      />
                    }
                  />
                  <Route path="inbox" element={<Inbox />} />
                  <Route path="sent" element={<Sentbox />} />
                  <Route path="mail" element={<SingleMailPage />} />
                  {/* default route */}
                  <Route
                    path="*"
                    element={<Navigate to="/" replace={true} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
          {draftOpen && <Draft />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
