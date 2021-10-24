import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";

import { useHistory } from "react-router-dom";

import { FaUserFriends } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../redux/actions/projectActions";
import { deleteProject } from "../../redux/actions/projectActions";
import moment from "moment";

const useStyles = makeStyles({
  paper: {
    minHeight: "300px",
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
              justifyItems="stretch"
              style={{ height: "100%" }}
              spacing={3}
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
  const dispatch = useDispatch();
  const handleClick = () => {
    history.push(`/tasks/${project._id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteProject(project._id));
  };

  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Paper className={classes.paper} onClick={handleClick}>
        <Grid
          container
          justifyContent="center"
          style={{ height: "100%" }}
          spacing={3}
        >
          <Grid item>
            <AiOutlineFundProjectionScreen className={classes.icon} />
          </Grid>
          <Grid item style={{ margin: "10px 0" }} xs={12}>
            <Typography variant={"h5"} style={{ textTransform: "capitalize" }}>
              <bold><strong>Title: </strong></bold>
              {project.project_name}
            </Typography>
          </Grid>
          <Grid item style={{ margin: "10px 0" }} xs={12}>
            <Typography variant="subtitle2">
              <i><strong>Duration: </strong></i>
              {moment(project.start_date).format("MMMM Do YYYY")} to{" "}
              {moment(project.end_date).format("MMMM Do YYYY")}
            </Typography>
          </Grid>
          <Grid
            direction="row"
            container
            xs={12}
            spacing={2}
            justifyContent="center"
          >
            <Grid item>
              <IconButton onClick={handleDelete} color="primary">
                <DeleteRoundedIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withRouter(Projects);
