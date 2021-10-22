import {
  Grid,
  Button,
  ListItemSecondaryAction,
  CircularProgress,
} from "@mui/material";
import { MdAdd } from "react-icons/md";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import Checkbox from "@mui/material/Checkbox";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, getTasks } from "../../redux/actions/taskActions";
import moment from "moment";

const AddTask = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [fetched, setFetched] = React.useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);
  const isLoadingTask = useSelector(
    (state) => state.tasks.tasksCompleteLoading
  );

  React.useEffect(() => {
    if (!fetched) {
      dispatch(getTasks({ project_id: params.project_id }));
      setFetched(true);
    }
  }, [fetched, dispatch, params]);

  const handleAddTasks = () => {
    history.push(`/addtask/${params.project_id}`);
  };

  const handleCompleteTask = (_task) => {
    _task = {
      ..._task,
      isComplete: 1,
    };
    dispatch(completeTask(_task));
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="flex-end">
          <Button
            startIcon={<MdAdd />}
            variant="contained"
            onClick={handleAddTasks}
          >
            Add Task
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {tasks?.map((task) => (
              <ListItem divider alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" />
                </ListItemAvatar>
                <ListItemText
                  primary={task.task_name}
                  style={{
                      textDecoration:task.isComplete && "line-through"
                  }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <strong>Period: </strong>
                        {moment(task.start_date).format("MMMM Do YYYY")} to{" "}
                        {moment(task.end_date).format("MMMM Do YYYY")}
                      </Typography>
                      <br />
                      {` — Duration: ${task.duration}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  {isLoadingTask === task._id ? (
                    <CircularProgress size={18} />
                  ) : (
                    <Checkbox
                      disabled={isLoadingTask || task.isComplete}
                      onChange={() => handleCompleteTask(task)}
                      checked={task.isComplete}
                    />
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTask;
