import React from "react";
import "./sidebar.scss";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CottageIcon from '@mui/icons-material/Cottage';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}} >
          <span className="logo">PROXY</span>
        </Link>
      </div>
      
      <div className="center">
        <ul>
          <p className="title">USER</p>
          <Link to="/users" style={{textDecoration: "none"}} >
          <li>
            <CottageIcon className="icon" />
            <span>Homebase</span>
          </li>
          </Link>
          <Link to="/users" style={{textDecoration: "none"}} >
          <li>
            <AccountBoxIcon className="icon" />
            <span>Artist Profile</span>
          </li>
          </Link>
          <Link to="/users" style={{textDecoration: "none"}} >
          <li>
            <MessageIcon className="icon" />
            <span>Messages</span>
          </li>
          </Link>
          <p className="title">DISCOVERY</p>
          <Link to="/users" style={{textDecoration: "none"}} >
          <li>
            <LeaderboardIcon className="icon" />
            <span>Leaderboard</span>
          </li>
          </Link>
          <Link to="/users" style={{textDecoration: "none"}} >
          <li>
            <FavoriteIcon className="icon" />
            <span>Likes</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
      </div>
    </div>
  );
};

export default Sidebar;
