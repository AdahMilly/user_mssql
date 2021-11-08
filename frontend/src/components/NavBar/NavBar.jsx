import React from "react";
import { Link, useHistory } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
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

const CustomButton = styled(Button)(({theme})=>({
  color:"#fff"
}))

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
          <CustomButton  variant={"outlined"} onClick={() => handleGetStarted()}>
            Get Started
          </CustomButton>
          <CustomButton variant={"outlined"}>
            <Link className={classes.linkStyle} to="/signin">
              SignIn
            </Link>
          </CustomButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
