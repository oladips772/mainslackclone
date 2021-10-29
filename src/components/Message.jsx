/** @format */
import React from "react";
import "../css/Message.css";

const Message = ({ message, timestamp, userImage, user }) => {
  return (
    <div className="message">
      <img
      src={userImage}
        alt=""
      />
      <div className="message-info">
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
