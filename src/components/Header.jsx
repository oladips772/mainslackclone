/** @format */
import { Avatar } from "@mui/material";
import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpIcon from "@mui/icons-material/Help";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth"

const Header = () => {
  const [user] = useAuthState(auth)
  const changeBg = () => {
    const header = document.querySelector(".header");
    const sidebar = document.querySelector(".sidebar");
    header.classList.toggle("dark")
    sidebar.classList.toggle("dark");
  }

  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="header-icon" alt={user?.displayName} src={user?.photoURL} onClick={(() => auth.signOut())}/>
      </div>
      <div className="header-middle">
        <AccessTimeIcon  className="time-icon"/>
        <div className="input-body">
          <input type="text" placeholder="search something.." />
          <SearchIcon />
        </div>
      </div>
      <div className="header-right">
        <HelpIcon className="help-icon" />
        <Brightness4Icon className="change-icon" onClick={changeBg}/>
      </div>
    </div>
  );
};

export default Header;
