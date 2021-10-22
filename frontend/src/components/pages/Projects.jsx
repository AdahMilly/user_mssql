import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useHistory } from "react-router-dom";

import { FaUserFriends } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../redux/actions/projectActions";
import moment from "moment";

const useStyles = makeStyles({
  paper: {
    height: "300px",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "aliceblue",
    },
  },
  icon: {
    height: "5rem",
    width: "5rem",
    fill: "grey",
  },
});

const Projects = () => {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const [fetched, setFetched] = useState(false);
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    if (!fetched) {
      dispatch(getProjects());
      setFetched(true);
    }
  }, [dispatch, fetched]);

  const handleClick = (e) => {
    e.stopPropagation();
    history.push("/projectform");
  };
  const clicked = (e) => {
    history.push("/taskform");
  };

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
                <FaUserFriends className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography variant={"h5"}>
                  Planning your next project?
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={handleClick} variant={"contained"}>
                  Create new
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {projects?.map((project) => (
          <ProjectItem project={project} classes={classes} history={history} />
        ))}
      </Grid>
    </div>
  );
};

export const ProjectItem = ({ project, classes, history }) => {
  const handleClick = () => {
    history.push(`/tasks/${project._id}`)
  };
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper} onClick={handleClick}>
        <Grid
          flexDirection="column"
          container
          direction="column"
          // alignItems=""
          justifyContent="flex-end"
          style={{ height: "100%" }}
        >
          <Grid item>
            <AiOutlineFundProjectionScreen className={classes.icon} />
          </Grid>
          <Grid item style={{ margin: "30px 0" }}>
            <Typography variant={"h5"} style={{ textTransform: "capitalize" }}>
              <strong>Title: </strong>
              {project.project_name}
            </Typography>
          </Grid>
          <Grid item style={{ margin: "30px 0" }}>
            <Typography variant="subtitle2">
              <strong>Duration: </strong>
              {moment(project.start_date).format("MMMM Do YYYY")} to{" "}
              {moment(project.end_date).format("MMMM Do YYYY")}
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withRouter(Projects);
