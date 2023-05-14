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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeDraft } from "./features/mailSlice";

function Draft() {
  const dispatch = useDispatch();
  // * small icon button jsx
  const SmallIconButton = (Icon, onClick) => (
    <IconButton onClick={onClick} className="icon-button" size="small">
      <Icon fontSize="small" />
    </IconButton>
  );
  // ! useForm
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  // * onSubmit form
  const onSubmit = (formData, e) => {
    console.log(formData);
  };
  // * on close draft
  const onClose = () => {
    dispatch(closeDraft());
  };

  return (
    <div className="draft">
      <div className="draft-header">
        <h3>New Message</h3>

        <div className="draft-header-right">
          {SmallIconButton(MinimizeIcon)}
          {SmallIconButton(OpenInFullIcon)}
          {SmallIconButton(CloseIcon, onClose)}
        </div>
      </div>

      <form className="draft-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to")}
          placeholder="Recipients"
          type="email"
          multiple
          required
        />
        <hr />

        <input
          {...register("sub")}
          placeholder="Subject"
          type="text"
          required
        />
        <hr />

        <textarea // ! textarea self closing in react
          {...register("msg")}
          placeholder="Message..."
          required
        />
        {/* {errors.msg && ( // ! handle errors using `errors` state
          <p className="form-msg-errors">This field is required</p>
        )} */}
        {/* buttons under form */}
        <div className="draft-bottom">
          <div className="draft-bottom-left">
            <Button
              type="submit"
              variant="contained"
              className="draft-bottom-send"
            >
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

          {SmallIconButton(DeleteOutlineIcon)}
        </div>
      </form>
    </div>
  );
}

export default Draft;
