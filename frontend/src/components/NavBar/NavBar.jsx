import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  linkStyle: {
    color: '#fafafa',
    textDecoration:'none'
  },
});

const NavBar = () => {

    const classes = useStyles()
    return (
        <>
            <AppBar position="static">
                <Typography variant="h4">
                    <Link className={ classes.linkStyle} to="/">
                        projectManagement
                    </Link>
                </Typography>
            </AppBar>
        </>
     );
}
 
export default NavBar;