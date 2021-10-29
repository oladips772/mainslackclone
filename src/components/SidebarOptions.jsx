/** @format */
import React from "react";
import "../css/SidebarOptions.css";
import { db } from "../firebase"
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const SidebarOptions = ({ title, Icon, id, addChannelOption }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("please enter channel name.");
    if (channelName) {
      db.collection("rooms").add({
        name:channelName,
      })
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId:id,
      }))
    }
  }
  
  return (
    <div
      className="sidebarOptions"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
          <div className="optionChannel">
            <span>#</span> {title}
          </div>
      )}
    </div>
  );
};

export default SidebarOptions;
