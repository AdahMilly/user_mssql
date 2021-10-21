import {
  Button,
  Typography,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../redux/actions/projectActions";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProjectForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.auth.user)
  const [project, setProject] = useState({
    project_name: "",
    user_name: currentUser.first_name +" "+ currentUser.last_name,
    description: "",
    start_date: new Date(),
    end_date: new Date(),
  });
  const loading = useSelector((state) => state.projects.projectCreateLoading);

  const handleInputChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (name, value) => {
    setProject((prev) => ({ ...prev, [name]: value._d }));
  };

  const handleCreateCallback = (error) => {
    if (error) {
      console.log(error);
    } else {
      history.push("/dashboard");
    }
  };

  const handleSubmit = () => {
    dispatch(createProject(project, handleCreateCallback));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateMoment}>
      <Grid
        spacing={2}
        container
        justifyContent="center"
        style={{ height: "80vh" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          item
          xs={12}
          md={6}
          lg={4}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h5">Create a new project here</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Project name"
              variant="standard"
              name="project_name"
              value={project.project_name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Owner"
              variant="standard"
              name="user_name"
              value={currentUser.first_name +" "+ currentUser.last_name}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              value={project.description}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/yyyy"
              name="start_date"
              value={project.start_date}
              onChange={(newValue) => {
                handleDateChange("start_date", newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid item xs={12}>
            <DesktopDatePicker
              label="End Date"
              inputFormat="MM/DD/yyyy"
              name="end_date"
              value={project.end_date}
              onChange={(newValue) => {
                handleDateChange("end_date", newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
          <Grid gap={1} container justifyContent="space-around">
            <Grid item xs={6}>
              <Button
                onClick={handleSubmit}
                variant={"contained"}
                disabled={loading}
                iconStart={loading && <CircularProgress size={20} />}
              >
                Create
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button disabled={loading} variant={"contained"}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default ProjectForm;
