import React from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MailList from "./MailList";
import SingleMail from "./SingleMail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Leftbar />
        <div className="app-main">
          <Header />
          <div className="app-body">
            <Navi />
            <div className="app-inner">
              <Routes>
                <Route path="/" element={<MailList />} />
                <Route path="/mail" element={<SingleMail />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
