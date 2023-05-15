import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEmail } from "./features/mailSlice";
import { doc, updateDoc } from "firebase/firestore";
import { colRef, db } from "./firebase";
import { selectUser } from "./features/userSlice";

function EmailRow({ uid, sender, to, subject, content, time, unread }) {
  const dispatch = useDispatch();
  // rourte to new a page
  const navigate = useNavigate();
  const accout = useSelector(selectUser);

  const onClick = () => {
    // * set this emial read
    if (unread) {
      const docRef = doc(colRef, uid);
      updateDoc(docRef, { unread: false });
    }
    dispatch(
      setSelectedEmail({
        uid: uid,
        sender: sender,
        to: to,
        subject: subject,
        content: content,
        time: time,
        unread: unread,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="email-row">
      <div className="email-row-options">
        <Checkbox size="small" />
        <IconButton size="small">
          <StarBorderOutlined fontSize="small" />
        </IconButton>
      </div>
      <div onClick={onClick} className="email-row-main">
        <h4 className={`email-row-sender${unread ? " unread" : ""}`}>
          {sender}
        </h4>
        <h4 className={`email-row-sub${unread ? " unread" : ""}`}>
          {subject}{" "}
        </h4>
        <p className="email-row-content">
          {"- "}
          {content}
        </p>
        <h4 className={`email-row-time${unread ? " unread" : ""}`}>{time}</h4>
      </div>
    </div>
  );
}

export default EmailRow;
