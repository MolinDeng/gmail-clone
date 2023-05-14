import React from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MailList from "./MailList";
import SingleMailPage from "./SingleMailPage";
import Draft from "./Draft";
import { useSelector } from "react-redux";
import { selectDraft } from "./features/mailSlice";

function App() {
  const draftOpen = useSelector(selectDraft);

  return (
    <div className="app">
      <Leftbar />
      <div className="app-main">
        <Header />
        <div className="app-body">
          <Navi />
          <div className="app-inner">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MailList />} />
                <Route path="/mail" element={<SingleMailPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      {draftOpen && <Draft />}
    </div>
  );
}

export default App;
