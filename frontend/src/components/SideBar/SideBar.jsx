import React from "react";
import "./SideBar.css";

import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkStyle: {
    color: "#00000",
    textDecoration: "none",
  },
});

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className="sidebar">
        <NavLink className={classes.linkStyle} to="/dashboard" style={{width:"100px", alignSelf:"center"}}>
          Dashboard
        </NavLink>

          <NavLink className={classes.linkStyle} to="/addtask" style={{width:"100px", alignSelf:"center"}}>
            Create Task
          </NavLink>
          <NavLink className={classes.linkStyle} to="/tasks" style={{width:"100px", alignSelf:"center"}}>
            View Tasks
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
