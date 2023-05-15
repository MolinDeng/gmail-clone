import React from "react";
import "./Header.css";
import { Avatar, Button, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeDraft } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(closeDraft()); // * close draft component
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  const rightIcon = (Icon, onClick) => (
    <div className="header-settings-icon">
      <IconButton onClick={onClick}>
        <Icon />
      </IconButton>
    </div>
  );

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt=""
        />
      </div>
      <div className="header-right">
        <div className="header-search">
          <SearchOutlinedIcon className="header-search-icon" />
          <input placeholder="Search in mail" type="text" />
          <TuneOutlinedIcon className="header-search-tune" />
        </div>
        <div className="header-settings">
          <Button className="header-status-button" size="small">
            <FiberManualRecordIcon color="success" fontSize="small" />
            <p>Active</p>
            <ArrowDropDownIcon />
          </Button>
          {rightIcon(HelpOutlineOutlinedIcon)}
          {rightIcon(SettingsIcon)}
          {rightIcon(AppsRoundedIcon)}
          {rightIcon(ExitToAppIcon, logoutApp)}

          <Avatar className="header-settings-avatar">{account.email[0]}</Avatar>
        </div>
      </div>
    </div>
  );
}

export default Header;
