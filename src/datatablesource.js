import "./avatar.png";
import AppleIcon from '@mui/icons-material/Apple';
import { Icon } from '@iconify/react';
import CloudIcon from '@mui/icons-material/Cloud';
let rankcount=0
export const userColumns = [
  { field: "rank", headerName: "Rank", width: 70, 
  },

  {
    field: "artist",
    headerName: "Artist",
    width: 230,
    renderCell: (params) => {
      let rankcount=0
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} />
          {params.row.username}
        </div>
      );
    },
  },
  
  { field: "popularity", headerName: "Popularity",  },
  { field: "state", headerName: "State", },
  { field: "city", headerName: "City",  },
  { field: "followers", headerName: "Followers", renderCell: ()=>{return(<div>N/A</div>)} },

  { field: "links", headerName: "Links",  renderCell: (params) => {
    let rankcount=0
    return (
      <div className="links">
        <a href={params.row.applemusic}><AppleIcon className="applelink" /></a>
        <a href={params.row.spotify}><Icon icon="mdi:spotify" width="24" height="24" inline={true}className="spotifylink" /></a>
        <a href={params.row.soundcloud}><CloudIcon className="soundcloudlink" /></a>
      </div>
    );
  }},
];

export const userRows = [
  {
    id: 234235,
    artistname: "dirtbowl",
    genre: "rap",
    streams: 1233434,
    location: "NYC, NY",
    musiclabel: "unsigned",
    image: "./avatar.png",
  },
  {
    id: 2342235,
    artistname: "dirtfdfbowl",
    genre: "rap",
    streams: 1233434,
    location: "NYC, NY",
    musiclabel: "unsigned",
    image: "./avatar.png",
  },
  {
    id: 23422235,
    artistname: "dirtssbowl",
    genre: "rap",
    streams: 1233434,
    location: "NYC, NY",
    musiclabel: "unsigned",
    image: "./avatar.png",
  },
  {
    id: 23423435,
    artistname: "dirtfdbowl",
    genre: "rap",
    streams: 1233434,
    location: "NYC, NY",
    musiclabel: "unsigned",
    image: "./avatar.png",
  },
];
