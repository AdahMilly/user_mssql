import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Card maxWidth="md">
          <div class="app">
            <NavBar />
            <SideBar />
            <div className="main">
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/projects" component={Projects} />
                <Route path="/addproject" component={AddProject} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/addtask" component={AddTask} />
                <Route path="/projecttaskcreated" component={ProjectTaskCreated} />
                <Route path="/progress" component={Progress} />
              </Switch>
            </div>
          </div>
        </Card>
      </BrowserRouter>
    </>
  );
};

export default App;
