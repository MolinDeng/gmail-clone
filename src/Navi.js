import React from "react";
import "./Navi.css";
import { Button } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import NaviOption from "./NaviOption";

import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LabelIcon from "@mui/icons-material/Label";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SendIcon from "@mui/icons-material/Send";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ReportIcon from "@mui/icons-material/Report";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navi() {
  return (
    <div className="navi">
      <Button
        className="navi-compose"
        startIcon={<CreateOutlinedIcon fontSize="large" />}>
        <p>Compose</p>
      </Button>
      <NaviOption
        Icon={InboxOutlinedIcon}
        IconSelected={InboxRoundedIcon}
        title="Inbox"
        number={54}
        selected={false}
      />
      <NaviOption
        Icon={StarBorderOutlinedIcon}
        IconSelected={StarIcon}
        title="Starred"
        number={54}
        selected={true}
      />
      <NaviOption
        Icon={AccessTimeOutlinedIcon}
        IconSelected={AccessTimeFilledIcon}
        title="Snoozed"
        number={54}
        selected={false}
      />
      <NaviOption
        Icon={LabelOutlinedIcon}
        IconSelected={LabelIcon}
        title="Important"
        number={0}
        selected={false}
      />
      <NaviOption
        Icon={SendOutlinedIcon}
        IconSelected={SendIcon}
        title="Sent"
        number={0}
        selected={false}
      />
      <NaviOption
        Icon={ScheduleSendOutlinedIcon}
        IconSelected={ScheduleSendIcon}
        title="Scheduled"
        number={0}
        selected={false}
      />
      <NaviOption
        Icon={TextSnippetOutlinedIcon}
        IconSelected={TextSnippetIcon}
        title="Draft"
        number={0}
        selected={false}
      />
      <NaviOption
        Icon={ReportGmailerrorredOutlinedIcon}
        IconSelected={ReportIcon}
        title="Spam"
        number={0}
        selected={false}
      />
      <NaviOption
        Icon={ExpandMoreIcon}
        title="More"
        number={0}
        selected={false}
      />
    </div>
  );
}

export default Navi;
