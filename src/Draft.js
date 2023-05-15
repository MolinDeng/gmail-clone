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
import { useDispatch, useSelector } from "react-redux";
import { closeDraft, selectEmail } from "./features/mailSlice";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { selectUser } from "./features/userSlice";

function Draft() {
  const account = useSelector(selectUser);
  const selectedEmail = useSelector(selectEmail);
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
    reset,
    // formState: { errors },
  } = useForm();

  // * onSubmit form
  const onSubmit = (formData) => {
    const colRef = collection(db, formData.to.split("@")[0]);
    addDoc(colRef, {
      sender: account.email,
      subject: formData.sub,
      content: formData.msg,
      time: Timestamp.now().toDate().toDateString(),
      createAt: Timestamp.now(),
      unread: true,
    })
      .then(() => {
        dispatch(closeDraft());
      })
      .catch((error) => alert(error));
    reset();
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
          {...register("to", { value: selectedEmail && selectedEmail.sender })}
          placeholder="Recipient"
          type="email"
          // multiple // ! enable this when building real app
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

          {SmallIconButton(DeleteOutlineIcon, onClose)}
        </div>
      </form>
    </div>
  );
}

export default Draft;
