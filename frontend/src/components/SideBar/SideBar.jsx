import React from "react";
import "./SideBar.css";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMinimize from "../ExpandMinimize/ExpandMinimize";

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
      <Button variant={"contained"}>
        <Link className={classes.linkStyle} to="/dashboard">
          Dashboard
        </Link>
      </Button>
      <ExpandMinimize title="Tasks bar">
        <Button className="btn" variant={"contained"}>
          <Link className={classes.linkStyle} to="/addtask">
            Create Task
          </Link>
        </Button>
        <Button className="btn" variant={"contained"}>
          <Link className={classes.linkStyle} to="/tasks">
            View Tasks
          </Link>
        </Button>
      </ExpandMinimize>
      <Button className="acc-btn" variant={"contained"}>
        <Link className={classes.linkStyle} to="/progress">
          Account
        </Link>
      </Button>
    </div>
  );
};

export default SideBar;
