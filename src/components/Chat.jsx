/** @format */
import React,{useEffect,useRef} from "react";
import "../css/Chat.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpIcon from "@mui/icons-material/Help";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";


const Chat = () => {
  const ChatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
    db.collection("rooms")
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp","asc")
    )

  useEffect(() => {
    ChatRef?.current?.scrollIntoView({
      behavior:"smooth",
    })
  },[roomId,loading])
  
  return (
    <div className="chat">
      {roomDetails && roomMessages && (
        <>
          <div className="chat-header">
            <div className="chatTop-left">
              <h4>
                #<strong>{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderIcon className="star-icon" />
            </div>
            <div className="chatTop-right">
              <HelpIcon className="info-icon" />
              <p>Details</p>
            </div>
          </div>

          <div className="chat-messages">
            {roomMessages?.docs.map((doc) => {
              const { message, user, userImage, timestamp } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  user={user}
                  userImage={userImage}
                  timestamp={timestamp}
                />
              );
            })}
            <div className="chatBottom" ref={ChatRef}></div>
          </div>
          <div className="chat-input">
            <ChatInput
              ChatRef={ChatRef}
              channelId={roomId}
              channelName={roomDetails?.data().name}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
