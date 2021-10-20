import React from "react";
import { Link, useHistory } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/signup");
  };
  return (
    <>
      <AppBar className="header" position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h5" className={classes.root}>
            <h5 className={classes.linkStyle} to="/">
              projectManagement
            </h5>
          </Typography>
          <Button variant={"outlined"} onClick={() => handleGetStarted()}>
            Get Started
          </Button>
          <Button variant={"outlined"}>
            <Link className={classes.linkStyle} to="/signin">
              SignIn
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
