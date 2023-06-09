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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDraft,
  openDraft,
  selectDraft,
  selectNaviIndex,
  selectUnreadNum,
} from "./features/mailSlice";

function Navi() {
  const draftOpen = useSelector(selectDraft);
  const unreadNum = useSelector(selectUnreadNum);
  const naviIndex = useSelector(selectNaviIndex);
  const dispatch = useDispatch();

  const onClickCompose = (e) => {
    if (!draftOpen) {
      dispatch(openDraft()); // ! we have to call the action, dispatch(openDraft) won't work
    } else {
      dispatch(closeDraft());
    }
  };

  const naviList = [
    {
      Icon: InboxOutlinedIcon,
      IconSelected: InboxRoundedIcon,
      title: "Inbox",
      number: unreadNum,
      index: 0,
    },
    {
      Icon: SendOutlinedIcon,
      IconSelected: SendIcon,
      title: "Sent",
      number: 0,
      index: 1,
    },
    {
      Icon: StarBorderOutlinedIcon,
      IconSelected: StarIcon,
      title: "Starred",
      number: 0,
      index: 2,
      disableClick: true,
    },
    {
      Icon: AccessTimeOutlinedIcon,
      IconSelected: AccessTimeFilledIcon,
      title: "Snoozed",
      number: 0,
      index: 3,
      disableClick: true,
    },
    {
      Icon: LabelOutlinedIcon,
      IconSelected: LabelIcon,
      title: "Important",
      number: 0,
      index: 4,
      disableClick: true,
    },
    {
      Icon: ScheduleSendOutlinedIcon,
      IconSelected: ScheduleSendIcon,
      title: "Scheduled",
      number: 0,
      index: 5,
      disableClick: true,
    },
    {
      Icon: TextSnippetOutlinedIcon,
      IconSelected: TextSnippetIcon,
      title: "Draft",
      number: 0,
      index: 6,
      disableClick: true,
    },
    {
      Icon: ReportGmailerrorredOutlinedIcon,
      IconSelected: ReportIcon,
      title: "Spam",
      number: 0,
      index: 7,
      disableClick: true,
    },
    {
      Icon: DeleteOutlineIcon,
      IconSelected: DeleteIcon,
      title: "Trash",
      number: 0,
      index: 8,
      disableClick: true,
    },
    {
      Icon: ExpandMoreIcon,
      IconSelected: ExpandMoreIcon,
      title: "More",
      number: 0,
      index: 9,
      disableClick: true,
    },
  ];

  return (
    <div className="navi">
      <Button
        onClick={onClickCompose}
        className="navi-compose"
        startIcon={<CreateOutlinedIcon fontSize="large" />}
      >
        <p>Compose</p>
      </Button>
      {naviList.map((data, index) => (
        <NaviOption key={index} {...data} selected={naviIndex === index} />
      ))}
    </div>
  );
}

export default Navi;
