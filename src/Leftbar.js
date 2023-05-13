import React from "react";
import "./Leftbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
function Leftbar() {
  const createIcon = (Icon, title, selected) => (
    <div className={`leftbar-option${selected ? "-active" : ""}`}>
      <IconButton size="small" className="leftbar-option-button">
        <div className="leftbar-option-icon-conatainer">
          <Icon fontSize="small" className="leftbar-option-icon" />
        </div>
      </IconButton>

      <p>{title}</p>
    </div>
  );

  return (
    <div className="leftbar">
      <IconButton className="lefebar-menu-button">
        <MenuIcon />
      </IconButton>
      {createIcon(EmailIcon, "Mail", true)}
      {createIcon(ChatBubbleOutlineIcon, "Chat", false)}
      {createIcon(GroupsOutlinedIcon, "Spaces", false)}
      {createIcon(VideocamOutlinedIcon, "Meet", false)}
    </div>
  );
}

export default Leftbar;
