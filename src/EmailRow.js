import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";

function EmailRow({ id, sender, subject, content, time, unread }) {
  return (
    <div className="email-row">
      <div className="email-row-options">
        <Checkbox size="small" />
        <IconButton size="small">
          <StarBorderOutlined fontSize="small" />
        </IconButton>
      </div>
      <h4 className={`email-row-sender${unread ? " unread" : ""}`}>{sender}</h4>
      <h4 className={`email-row-sub${unread ? " unread" : ""}`}>{subject} </h4>
      <p className="email-row-content">
        {"- "}
        {content}
      </p>
      <h4 className={`email-row-time${unread ? " unread" : ""}`}>{time}</h4>
    </div>
  );
}

export default EmailRow;
