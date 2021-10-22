import {
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";

import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useHistory, useParams } from "react-router";
import { createTask } from "../../redux/actions/taskActions";

const TaskForm = () => {
  const [usersFetched, setUsersFetched] = useState(false);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.tasks.taskCreateLoading);
  const history = useHistory();
  const params = useParams();
  const [task, setTask] = useState({
    task_name: "",
    duration: "",
    user_id: "",
    project_id: params.project_id,
    start_date: new Date(),
    end_date: new Date(),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!usersFetched) {
      dispatch(getUsers());
      setUsersFetched(true);
    }
  }, [usersFetched, dispatch]);

  const handleDateChange = (name, value) => {
    setTask((prev) => ({ ...prev, [name]: value._d }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateCallback = (error) => {
    if (error) {
      console.log(error);
    } else {
      history.push(`/tasks/${params.project_id}`);
    }
  };

  const handleTaskSubmit = () => {
    dispatch(createTask(task, handleCreateCallback));
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
            <Typography variant="h5">Create a new task</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="task name"
              variant="standard"
              name="task_name"
              value={task.task_name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">Assignee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={task.user_id}
                name={"user_id"}
                label="Assignee"
                onChange={handleChange}
              >
                {users.map((user) => (
                  <MenuItem value={user._id}>
                    {user.first_name + " " + user.last_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Duration"
              variant="standard"
              name="duration"
              value={task.duration}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/yyyy"
              name="start_date"
              onChange={(newValue) => {
                handleDateChange("start_date", newValue);
              }}
              value={task.start_date}
              renderInput={(params) => (
                <TextField variant="standard" fullWidth {...params} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <DesktopDatePicker
              label="End Date"
              inputFormat="MM/DD/yyyy"
              name="end_date"
              onChange={(newValue) => {
                handleDateChange("end_date", newValue);
              }}
              value={task.end_date}
              renderInput={(params) => (
                <TextField variant="standard" fullWidth {...params} />
              )}
            />
          </Grid>

          <Grid item xs={12} container justifyContent="space-evenly">
            <Button
              variant={"contained"}
              onClick={handleTaskSubmit}
              disabled={loading}
              iconStart={loading && <CircularProgress size={20} />}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default TaskForm;
