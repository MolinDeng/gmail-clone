import React, { useEffect, useState } from "react";
import "./MailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Checkbox } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmailRow from "./EmailRow";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { db } from "./firebase";
import { setUnread } from "./features/mailSlice";

function MailList() {
  const account = useSelector(selectUser);
  const dispatch = useDispatch();
  const [emails, setEmails] = useState([]);
  const colRef = collection(db, account.userName);
  const q = query(colRef, orderBy("createAt", "desc"));
  //create a real-time listener to firebase
  useEffect(() => {
    onSnapshot(
      q,
      (snapshot) => {
        let arr = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        dispatch(setUnread(arr.filter((d) => d.data.unread === true).length));
        setEmails(arr);
      },
      (err) => {
        alert(err.message);
      }
    );
  }, [q, dispatch]);

  const SmallIconButton = (Icon) => (
    <IconButton size="small">
      <Icon fontSize="small" />
    </IconButton>
  );

  return (
    <div className="maillist">
      <div className="maillist-settings">
        <div className="maillist-settings-left">
          <Checkbox size="small" />
          {SmallIconButton(ArrowDropDownIcon)}
          {SmallIconButton(RefreshIcon)}
          {SmallIconButton(MoreVertIcon)}
        </div>
        <div className="maillist-settings-right">
          {SmallIconButton(KeyboardArrowLeftIcon)}
          {SmallIconButton(KeyboardArrowRightIcon)}
          {SmallIconButton(KeyboardIcon)}
          {SmallIconButton(ArrowDropDownIcon)}
        </div>
      </div>
      <div className="maillist-sections">
        <Section Icon={InboxIcon} title={"Primary"} selected={true} />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title={"Promotions"}
          selected={false}
        />
        <Section Icon={PeopleOutlinedIcon} title={"Social"} selected={false} />
      </div>
      <div className="maillist-rows">
        {emails.map(({ id, data }) => (
          <EmailRow
            key={id} // ! Must have unique key attribute
            uid={id}
            sender={data.sender}
            subject={data.subject}
            content={data.content}
            time={data.time}
            unread={data.unread}
          />
        ))}
      </div>
    </div>
  );
}

export default MailList;
