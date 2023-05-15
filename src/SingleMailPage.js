import React from "react";
import "./SingleMailPage.css";
import { Avatar, Button, IconButton } from "@mui/material";
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
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useNavigate } from "react-router-dom";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useSelector } from "react-redux";
import { selectEmail } from "./features/mailSlice";

function SingleMailPage() {
  const selectedEmail = useSelector(selectEmail);

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
        <div className="mail-main-scroll">
          <div className="mail-title">
            <h1>{selectedEmail.subject}</h1>
            <div className="mail-title-right">
              {SmallIconButton(PrintOutlinedIcon)}
              {SmallIconButton(OpenInNewOutlinedIcon)}
            </div>
          </div>
          <div className="mail-sender">
            <div className="mail-sender-left">
              <Avatar />
              <div className="mail-sender-left-mail">
                <p className="up">
                  {"<"}
                  {selectedEmail.sender}
                  {">"}
                </p>
                <div className="down">
                  <p>to me</p>
                  <ArrowDropDownRoundedIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="mail-sender-right">
              <p>{selectedEmail.time}</p>
              {SmallIconButton(StarBorderOutlinedIcon)}
              {SmallIconButton(TurnLeftIcon)}
              {SmallIconButton(MoreVertOutlinedIcon)}
            </div>
          </div>
          <div className="mail-content">
            <p>{selectedEmail.content}</p>
          </div>
          <div className="mail-bottom">
            <Button
              className="mail-bottom-button"
              startIcon={<TurnLeftIcon fontSize="large" />}
            >
              <p>Reply</p>
            </Button>
            <Button
              className="mail-bottom-button"
              startIcon={<TurnRightIcon fontSize="large" />}
            >
              <p>Forward</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMailPage;
