import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Database = () => {
  const rows = [
    {
      id: 234235,
      artistname: "dirtbowl",
      genre: "rap",
      streams: 1233434,
      location: "NYC, NY",
      musiclabel: "unsigned",
      image: "./avatar.png"
    },
    {
      id: 2342235,
      artistname: "dirtfdfbowl",
      genre: "rap",
      streams: 1233434,
      location: "NYC, NY",
      musiclabel: "unsigned",
      image: "./avatar.png"
    },
    {
      id: 23422235,
      artistname: "dirtssbowl",
      genre: "rap",
      streams: 1233434,
      location: "NYC, NY",
      musiclabel: "unsigned",
      image: "./avatar.png"
    },
    {
      id: 23423435,
      artistname: "dirtfdbowl",
      genre: "rap",
      streams: 1233434,
      location: "NYC, NY",
      musiclabel: "unsigned",
      image: "./avatar.png"
    },
  ];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className="table"  aria-label="simple table">
          <TableHead>
            <TableRow className="tablerow">
              <TableCell className="tablecell">Rank</TableCell>
              <TableCell className="tablecell">Name</TableCell>
              <TableCell className="tablecell">Genre</TableCell>
              <TableCell className="tablecell">Streams</TableCell>
              <TableCell className="tablecell">Location</TableCell>
              <TableCell className="tablecell">Label</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="tablecell" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right" className="tablecell">
                  <div className="cellwrapper">
                    <img className="image" src={row.image} />{row.artistname}
                  </div>
                </TableCell>
                
                <TableCell className="tablecell">{row.genre}</TableCell>
                <TableCell className="tablecell">{row.streams}</TableCell>
                <TableCell className="tablecell">{row.location}</TableCell>
                <TableCell className="tablecell">{row.musiclabel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Database;
