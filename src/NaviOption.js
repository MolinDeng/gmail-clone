import React from "react";
import "./NaviOption.css";
function NaviOption({ Icon, IconSelected, title, number, selected }) {
  return (
    <div className={`navi-option${selected ? "-active" : ""}`}>
      {selected ? (
        <IconSelected fontSize="small" className="navi-option-icon" />
      ) : (
        <Icon fontSize="small" className="navi-option-icon" />
      )}

      <p className="navi-option-title">{title}</p>
      {number !== 0 && <p className="navi-option-num">{number}</p>}
    </div>
  );
}

export default NaviOption;
