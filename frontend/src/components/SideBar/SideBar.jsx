import React from "react";
import "./SideBar.css";

import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkStyle: {
    borderColor:"blue",
    textDecoration: "none",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className="sidebar">
        <NavLink className={classes.linkStyle} to="/dashboard" style={{width:"100px", alignSelf:"center",border:"solid ##0b5bdb",margin:"20px",padding:"10px",fontSize:"1.2rem",color:"black"}}>
          Dashboard
        </NavLink>
      <Button className="acc-btn" variant={"outlined"} style={{width:"100px", alignSelf:"center"}}>
        <NavLink className={classes.linkStyle} to="/progress">
          Account
        </NavLink>
      </Button>
    </div>
  );
};

export default SideBar;
