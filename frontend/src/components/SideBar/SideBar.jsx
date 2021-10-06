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
      <Button color="inherit">
        <Link className={classes.linkStyle} to="/projecttaskcreated">
          Dashboard
        </Link>
      </Button>
      <ExpandMinimize title="Projects bar">
        <Button className="btn">
          <Link className={classes.linkStyle} to="/addproject">
            Create Project
          </Link>
        </Button>
        <Button className="btn">
          <Link className={classes.linkStyle} to="/projects">
            View Projects
          </Link>
        </Button>
      </ExpandMinimize>
      <ExpandMinimize title="Tasks bar">
        <Button className="btn">
          <Link className={classes.linkStyle} to="/addtask">
            Create Task
          </Link>
        </Button>
        <Button className="btn">
          <Link className={classes.linkStyle} to="/tasks">
            View Tasks
          </Link>
        </Button>
      </ExpandMinimize>
      <Button color="inherit" className="acc-btn">
        <Link className={classes.linkStyle} to="/progress">
          Account
        </Link>
      </Button>
    </div>
  );
};

export default SideBar;
