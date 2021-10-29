/** @format */
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import "../css/Sidebar.css";
import SidebarOptions from "./SidebarOptions"
import CreateIcon from "@mui/icons-material/Create";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArchiveIcon from "@mui/icons-material/Archive";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebartop-header">
          <h3>Slack.Org</h3>
          <CreateIcon className="write-icon" />
        </div>
        <div className="sidebartop-info">
          <FiberManualRecordIcon className="active-icon" />
          <h3>{user.displayName}</h3>
        </div>
      </div>
      <div className="sidebar-options">
        <SidebarOptions title="Threads" Icon={ChatBubbleIcon} />
        <SidebarOptions title="Archived Chats" Icon={ArchiveIcon} />
        <SidebarOptions title="Mails" Icon={MailIcon} />
        <SidebarOptions title="People And Groups" Icon={GroupIcon} />
        <SidebarOptions title="Settings" Icon={SettingsApplicationsIcon} />
        <SidebarOptions title="Application" Icon={AppsIcon} />
        <SidebarOptions title="Show less" Icon={KeyboardArrowUpIcon} />
        <hr />
        <SidebarOptions title="Channels" Icon={KeyboardArrowDownIcon}  />
        <hr />
        <SidebarOptions title="Add Channel" Icon={AddIcon} addChannelOption/>
        {channels?.docs.map((doc) => (
          <SidebarOptions
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
