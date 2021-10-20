import React from "react";
import { withRouter } from "react-router";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useHistory } from "react-router-dom"

import { FaUserFriends } from "react-icons/fa";

const useStyles = makeStyles({
  paper: {
    height: "300px",
  },
  icon: {
      height:"5rem",
      width:"5rem",
      fill:"grey"
  }
});

const Projects = () => {
  const classes = useStyles();

  let history = useHistory()
  const handleClick = (e) => {
    e.stopPropagation()
      history.push('/projectform')
  };
  const clicked = (e) => {
      history.push('/taskform')
  }
  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Paper className={classes.paper} onClick={clicked}>
            <Grid
              flexDirection="column"
              container
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
              style={{ height: "100%" }}
            >
              <Grid item>
                <FaUserFriends className={classes.icon}/>
              </Grid>
              <Grid item>
                <Typography variant={"h5"}>
                  Planning your next project?
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={handleClick}>Create new</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Projects);
