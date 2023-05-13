import React from "react";
import "./Draft.css";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { Button, IconButton } from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Draft() {
  const SmallIconButton = (Icon) => (
    <IconButton className="icon-button" size="small">
      <Icon fontSize="small" />
    </IconButton>
  );

  return (
    <div className="draft">
      <div className="draft-header">
        <h3>New Message</h3>
        <div className="draft-header-right">
          {SmallIconButton(MinimizeIcon)}
          {SmallIconButton(OpenInFullIcon)}
          {SmallIconButton(CloseIcon)}
        </div>
      </div>
      <form className="draft-form">
        <input type="text" />
        <input type="text" />
        <textarea rows="5" cols="33" required></textarea>
      </form>

      <div className="draft-bottom">
        <div className="draft-bottom-left">
          <Button
            type="submi"
            variant="contained"
            className="draft-bottom-send">
            Send
          </Button>
          {SmallIconButton(FontDownloadOutlinedIcon)}
          {SmallIconButton(AttachFileOutlinedIcon)}
          {SmallIconButton(LinkOutlinedIcon)}
          {SmallIconButton(SentimentSatisfiedOutlinedIcon)}
          {SmallIconButton(AddToDriveIcon)}
          {SmallIconButton(InsertPhotoIcon)}
          {SmallIconButton(MoreVertIcon)}
        </div>
        <div className="draft-bottom-right">
          {SmallIconButton(DeleteOutlineIcon)}
        </div>
      </div>
    </div>
  );
}

export default Draft;
