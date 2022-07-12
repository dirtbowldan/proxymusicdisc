import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import EnhancedTable from "../../components/sortableTable/sortableTable";
const Home = ({currentUser}) => {
  return (
    <div className="home">
      <Sidebar  />
      <div className="homeContainer">
        <Navbar currentUser = {currentUser}/>
        <div className="widgets">
          <Widget
            title="Artist of the Day"
            bottomleft={"Dirtbowl"}
            link={"/aotd"}
            imglink={"data:image/jpeg;base64,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"}
          />
          <Widget
            title="City of the Week"
            bottomleft={"Memphis"}
            link={"/cotd"}
            imglink={"data:image/jpeg;base64,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"}
          />
          <Widget
            title="State of the Month"
            bottomleft={"NY"}
            link={"/sotm"}
            imglink={"data:image/jpeg;base64,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"}
          />
         
        </div>
        <div className="charts">
          <Featured currentUseruid = {currentUser.uid}/>
        <div className="listContainer">
          <div className="listtitle">
            <h1>Followed Artists</h1>
          </div>
          <EnhancedTable />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
