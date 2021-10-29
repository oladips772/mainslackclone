/** @format */
import React, { useState } from "react";
import "../css/ChatInput.css";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";

const ChatInput = ({ channelName, channelId, ChatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const handleSend = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      user: user.displayName,
      userImage: user.photoURL,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });

    ChatRef?.current?.scrollIntoView({
      behavior:"smooth",
    })

    setInput("");
  };

  return (
    <div className="chat-input">
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInput;
