import React from "react";
import "./SingleMailPage.css";
import { IconButton } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function SingleMailPage() {
  const navigate = useNavigate();
  const SmallIconButton = (Icon, onClick) => (
    <IconButton onClick={onClick} size="small">
      <Icon className="mail-tools-icon" fontSize="small" />
    </IconButton>
  );
  return (
    <div className="mail-page">
      <div className="mail-tools">
        <div className="mail-tools-left">
          {SmallIconButton(ArrowBackIcon, (e) => navigate("/"))}
          {SmallIconButton(ArchiveOutlinedIcon)}
          {SmallIconButton(ReportOutlinedIcon)}
          {SmallIconButton(DeleteOutlinedIcon)}
          {SmallIconButton(EmailOutlinedIcon)}
          {SmallIconButton(AccessTimeOutlinedIcon)}
          {SmallIconButton(AddTaskOutlinedIcon)}
          {SmallIconButton(DriveFileMoveOutlinedIcon)}
          {SmallIconButton(BookmarkBorderOutlinedIcon)}
          {SmallIconButton(MoreVertOutlinedIcon)}
        </div>
        <div className="mail-tools-right">
          {SmallIconButton(KeyboardArrowLeftIcon)}
          {SmallIconButton(KeyboardArrowRightIcon)}
          {SmallIconButton(KeyboardIcon)}
          {SmallIconButton(ArrowDropDownIcon)}
        </div>
      </div>
      <div className="mail-main">
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default SingleMailPage;
