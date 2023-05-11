import React from "react";
import "./App.css";
import Leftbar from "./Leftbar";
import Header from "./Header";
import Navi from "./Navi";

function App() {
  return (
    <div className="app">
      <Leftbar />
      <div className="main">
        <Header />
        <Navi />
      </div>
    </div>
  );
}

export default App;
