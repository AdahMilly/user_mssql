import { Button, Typography, TextField, Grid } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// import {
//   MuiPickersUtilsProvider,
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
// } from "@material-ui/pickers";
// import DateMomentUtils from "@date-io/moment";
// import {  MuiPickersUtilsProvider } from "@material-ui/pickers";

import { useState } from "react";

const ProjectForm = () => {
  const [project, setProject] = useState({
    project_name: "",
    user_name: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const handleInputChange = (e) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (name, value) => {
    setProject((prev) => ({ ...prev, [name]: value._d }));
  };

  const handleSubmit = () =>{
    console.log({project});
  }

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
              value={project.user_name}
              onChange={handleInputChange}
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
              inputFormat="MM/dd/yyyy"
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
              inputFormat="MM/dd/yyyy"
              name="end_date"
              value={project.end_date}
              onChange={(newValue) => {
                handleDateChange("end_date", newValue);
              }}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>
        </Grid>

        <Grid gap={1} container justifyContent="space-evenly">
        <Grid item xs={6}>
          <Button onClick={handleSubmit} fullWidth variant={"contained"}>Create</Button>
          </Grid>
          <Grid item xs={5}>
          <Button fullWidth variant={"contained"}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default ProjectForm;
