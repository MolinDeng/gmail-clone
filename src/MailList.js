import React from "react";
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
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

function MailList() {
  const SmallIconButton = (Icon) => (
    <IconButton size="small">
      <Icon />
    </IconButton>
  );

  return (
    <div className="maillist">
      <div className="maillist-settings">
        <div className="maillist-settings-left">
          <Checkbox />
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
    </div>
  );
}

export default MailList;
