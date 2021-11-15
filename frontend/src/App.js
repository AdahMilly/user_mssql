import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Card } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SideBar from "./components/SideBar/SideBar";

import "./app.css";
import Progress from "./components/pages/Progress";
import ProtectedRouter from "./components/routerHandler/protectedRouter";
import Projects from "./components/pages/Projects";
import ProjectForm from "./components/pages/projectForm";
import TaskForm from "./components/pages/taskForm";
import { getUser } from "./utils/setUser";
import { useDispatch } from "react-redux";
import authActionCreators from "./redux/actionCreators/auth.actions";
import AddTask from "./components/pages/AddTask";
import Tasks from "./components/pages/tasks";

const App = () => {
  const user = getUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(authActionCreators.userSignInSuccess(user))
    }
  }, [user, dispatch])
  
  return (
    <>
      <Router>
        <Card>
          <div class="app">
            <NavBar />
            <SideBar />
            <div className="main">
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <ProtectedRouter path="/dashboard" component={Projects}/>
                <Route path="/projectform" component={ProjectForm} />
                <Route path="/taskform" component={TaskForm} />
                <Route path="/addtask/:project_id" component={AddTask} />
                <Route path="/tasks/:project_id" component={Tasks} />
                <ProtectedRouter path="/progress" component={Progress} />
              </Switch>
            </div>
          </div>
        </Card>
      </Router>
    </>
  );
};

export default App;
