import React from "react";
import "./NaviOption.css";
function NaviOption({ Icon, title, number }) {
  return (
    <div className="navi-option">
      <Icon />
      <p>{title}</p>
      <p>{number}</p>
    </div>
  );
}

export default NaviOption;
