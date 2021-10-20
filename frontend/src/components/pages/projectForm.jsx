import { Button, Typography, TextField, Grid } from "@mui/material";
import React from "react";

const ProjectForm = () => {
  return (
    <form >
      <Grid spacing={2} container justifyContent="center" style={{height: '80vh'}}>
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
            <TextField
              fullWidth
              id="standard-basic"
              label="Start Date"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="End Date"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} container justifyContent="space-evenly">
            <Button variant={"contained"}>Create</Button>
            <Button variant={"contained"}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProjectForm;
