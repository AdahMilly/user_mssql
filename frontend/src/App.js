import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Card} from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Projects from "./components/pages/projects/Projects";
import SideBar from "./components/SideBar/SideBar";
import AddProject from "./components/pages/projects/AddProject";
import Tasks from "./components/pages/tasks/Tasks"

import "./app.css";
import ProjectTaskCreated from "./components/pages/ProjectTaskCreated";
import AddTask from "./components/pages/tasks/AddTask";
import Progress from "./components/pages/Progress";
import ProtectedRouter from "./components/routerHandler/protectedRouter";

const App = () => {
  return (
    <>
      <Router>
        <Card maxWidth="md">
          <div class="app">
            <NavBar />
            <SideBar />
            <div className="main">
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <ProtectedRouter path="/projects" component={Projects} />
                <ProtectedRouter path="/addproject" component={AddProject} />
                <ProtectedRouter path="/tasks" component={Tasks} />
                <ProtectedRouter path="/addtask" component={AddTask} />
                <ProtectedRouter path="/dashboard" component={ProjectTaskCreated} />
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
