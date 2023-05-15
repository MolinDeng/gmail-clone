import React from "react";
import "./NaviOption.css";
import { useDispatch } from "react-redux";
import { setNaviIndex } from "./features/mailSlice";
import { useNavigate } from "react-router-dom";
function NaviOption({
  index,
  Icon,
  IconSelected,
  title,
  number,
  selected,
  disableClick,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    if (disableClick) return;
    dispatch(setNaviIndex(index));
    navigate(index === 0 ? "inbox" : "sent");
  };
  return (
    <div
      onClick={onClick}
      className={`navi-option${selected ? "-active" : ""}`}
    >
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
