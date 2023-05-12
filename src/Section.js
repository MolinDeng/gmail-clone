import React from "react";
import "./Section.css";
function Section({ Icon, title, selected }) {
  return (
    <div className={`maillist-single-section${selected ? " active" : ""}`}>
      <Icon className="icon" fontSize="small" />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
