import React from "react";
import "./NaviOption.css";
import { useDispatch } from "react-redux";
import { setNaviIndex } from "./features/mailSlice";
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
  const onClick = () => {
    if (disableClick) return;
    dispatch(setNaviIndex(index));
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
