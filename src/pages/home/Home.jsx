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
            link={"Discover"}
          />
          <Widget
            title="City of the Week"
            bottomleft={"Memphis"}
            link={"Discover"}
          />
          <Widget
            title="State of the Month"
            bottomleft={"Montana"}
            link={"Discover"}
          />
          <Widget
            title="Explore your Area"
            bottomleft={"Raleigh, NC"}
            link={"Discover"}
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
