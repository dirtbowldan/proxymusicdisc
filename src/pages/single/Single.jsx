import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Featured from "../../components/featured/Featured";
import Database from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import SpotifyApi from "../../SpotifyApi";
const Single = () => {
  const [nameData, setNameData] = React.useState("");
  const [locationData, setLocData] = React.useState("");
  const [imgData, setImgData] = React.useState("");
  const location = useLocation();
  const userid = location.pathname.split("/")[2];
  let querySnapshot = null;
  let rankdata = null;
  const fetchData = async () => {
    let list = [];
    try {
      querySnapshot = await getDoc(doc(db, "users", userid));
      rankdata = querySnapshot.data();
      setNameData(rankdata["artist"]);
      setLocData("" + rankdata["city"] + ", " + rankdata["state"]);
      setImgData(rankdata["img"]);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <SpotifyApi />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="infocard">
              <img className="userimage" src={imgData} />
              <h1 className="usertitle">{nameData}</h1>
              <div className="detailitem">
                <span className="itemkey">Genre:</span>
                <span className="itemvalue">Rap</span>
              </div>
              <div className="detailitem">
                <span className="itemkey">Location:</span>
                <span className="itemvalue">{locationData}</span>
                <Featured currentUseruid={userid} />
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        
      </div>
    </div>
  );
};

export default Single;
