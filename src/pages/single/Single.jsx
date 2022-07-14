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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
    <div className="container-fluid">
      <div className="row">
      <div className="col-auto"><Sidebar /></div>
      <div className="col"><Navbar />
      <div className="row">
        <div className="col">
        <h1 className="artistTitle">{nameData}</h1>
          <Featured currentUseruid={userid} /></div>
      </div>
      
      </div>
      </div>
      
      
   
    </div>
  );
};

export default Single;
