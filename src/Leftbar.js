import React from "react";
import "./Leftbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

function Leftbar() {
  const createIcon = (Icon, title) => (
    <div className="leftbar-option">
      <IconButton>
        <Icon className="leftbar-icon" />
      </IconButton>

      <h4>{title}</h4>
    </div>
  );

  return (
    <div className="Leftbar">
      <IconButton>
        <MenuIcon />
      </IconButton>
      {createIcon(EmailIcon, "Email")}
      {createIcon(ChatBubbleOutlineIcon, "Chat")}
      {createIcon(GroupsIcon, "Spaces")}
      {createIcon(VideocamOutlinedIcon, "Meet")}
    </div>
  );
}

export default Leftbar;
