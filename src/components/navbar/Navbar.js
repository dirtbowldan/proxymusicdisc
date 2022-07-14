import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MessageIcon from "@mui/icons-material/Message";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Navbar = ({currentUser}) => {
  
  const handleLogout = ( ) => {
    localStorage.setItem("user", JSON.stringify(""));
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }


  return (
    <div className="navbar1">
      <div className="wrapper">
        <div><h1></h1></div>
        <div className="items">
          <div className="item">
            <MessageIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <LeaderboardIcon className="icon" />
          </div>
          <div className="item">
            <AccountBoxIcon className="icon" />
          </div>
          <div className="item">
            <img src={require("./avatar.png")} className="avatar" />
          </div>
          
          <button type="submit" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
