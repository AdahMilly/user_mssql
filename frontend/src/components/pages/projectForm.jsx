import { Button, Typography, TextField, Grid } from "@mui/material";
import React from "react";

// import {
//   MuiPickersUtilsProvider,
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
// } from "@material-ui/pickers";
// import DateMomentUtils from "@date-io/moment";
import {  MuiPickersUtilsProvider } from "@material-ui/pickers";

import { useState } from "react";

const ProjectForm = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <form>
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
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Owner"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Description"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
          <MuiPickersUtilsProvider
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
          {/* <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider> */}
          </Grid>
          <MuiPickersUtilsProvider
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
          {/* <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider> */}
          </Grid>

          <Grid item xs={12} container justifyContent="space-evenly">
            <Button variant={"contained"}>Create</Button>
            <Button variant={"contained"}>Cancel</Button>
          </Grid>
        </Grid>
    </form>
  );
};

export default ProjectForm;
