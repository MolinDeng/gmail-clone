import React, { useEffect, useState } from "react";
import MailList from "./MailList";
import { onSnapshot, orderBy, query, where } from "firebase/firestore";
import { colRef } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sentbox() {
  const dispatch = useDispatch();
  const account = useSelector(selectUser);
  const [emails, setEmails] = useState([]);

  const q = query(
    colRef,
    where("sender", "==", account.email),
    orderBy("createAt", "desc")
  );
  //create a real-time listener to firebase
  useEffect(() => {
    onSnapshot(
      q,
      (snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (err) => {
        alert(err.message);
      }
    );
  }, [q, dispatch]);
  return (
    <>
      <MailList emails={emails} naviIndex={1} />
    </>
  );
}

export default Sentbox;
