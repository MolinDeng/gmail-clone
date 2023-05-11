import React from "react";
import "./Navi.css";
import { Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NaviOption from "./NaviOption";

import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Navi() {
  return (
    <div className="navi">
      <Button
        className="navi-compose"
        startIcon={<CreateOutlinedIcon fontSize="large" />}>
        Compose
      </Button>
      <NaviOption Icon={InboxOutlinedIcon} title="Inbox" number={54} />
      <NaviOption Icon={StarBorderOutlinedIcon} title="Starred" number={54} />
      <NaviOption Icon={AccessTimeOutlinedIcon} title="Snoozed" number={54} />
      <NaviOption Icon={LabelOutlinedIcon} title="Important" number={54} />
      <NaviOption Icon={SendOutlinedIcon} title="Sent" number={54} />
    </div>
  );
}

export default Navi;
