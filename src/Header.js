import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  const rightIcon = (Icon) => (
    <div className="header-right-icon">
      <IconButton>
        <Icon />
      </IconButton>
    </div>
  );

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt=""
        />
      </div>
      <div className="header-search">
        <SearchOutlinedIcon className="header-search-icon" />
        <input placeholder="Search in mail" type="text" />
        <TuneOutlinedIcon className="header-search-tune" />
      </div>
      <div className="header-right">
        {rightIcon(HelpOutlineOutlinedIcon)}
        {rightIcon(SettingsIcon)}
        {rightIcon(AppsRoundedIcon)}
        <Avatar className="header-right-avatar" />
      </div>
    </div>
  );
}

export default Header;
