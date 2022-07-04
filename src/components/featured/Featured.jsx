import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
const Featured = ({ currentUseruid }) => {
  let querySnapshot = null
  const [rank, setRank] = React.useState(0)
  const [staterank, setStateRank] = React.useState(0)
  const [cityrank, setCityRank] = React.useState(0)
  let rankdata = null
  const fetchData = async () => {
    let list = [];
    try{
    querySnapshot = await getDoc(doc(db, "users", currentUseruid));
    rankdata = querySnapshot.data()
    setRank(rankdata["rank"])
    setStateRank(rankdata["staterank"])
    setCityRank(rankdata["cityrank"])
    }
   catch (err) {
    console.log(err)
  }
  
  };
  fetchData();
  

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Artist Rank</h1>
        <img src="yo" />
      </div>
      <div className="middle">
        <div className="featuredChart">
          <p>Overall Percentile (Streams)</p>
          <CircularProgressbar
            className="percchart"
            value={70}
            text="70%"
            strokeWidth={50}
            styles={buildStyles({
              textSize: "39px",
              textColor: "black",
              pathColor: "#f88",
              backgroundColor: "#f88",
              strokeLinecap: "butt",
            })}
          />
        </div>
        <div className="overallRank">
          <p className="ranktitle">Overall Rank</p>
          <p className="rank">{rank}</p>
        </div>
      </div>

      <div className="bottom">
        <h1 className="title">Stream Ranks</h1>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Country</div>
            <div className="itemresult">
              <div className="resultamount">{rank}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">State</div>
            <div className="itemresult">
              <div className="resultamount">{staterank}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">City</div>
            <div className="itemresult">
              <div className="resultamount">{cityrank}</div>
            </div>
          </div>
        </div>

        <h1 className="title">Following Ranks</h1>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Country</div>
            <div className="itemresult">
              <div className="resultamount">-</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">State</div>
            <div className="itemresult">
              <div className="resultamount">-</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">City</div>
            <div className="itemresult">
              <div className="resultamount">-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
