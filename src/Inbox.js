import React, { useEffect, useState } from "react";
import MailList from "./MailList";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";
import { colRef } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { setUnread } from "./features/mailSlice";

function Inbox() {
  const dispatch = useDispatch();
  const account = useSelector(selectUser);
  const [emails, setEmails] = useState([]);

  const q = query(
    colRef,
    where("to", "==", account.email),
    orderBy("createAt", "desc")
  );
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
  return (
    <>
      <MailList emails={emails} naviIndex={0} />
    </>
  );
}

export default Inbox;
