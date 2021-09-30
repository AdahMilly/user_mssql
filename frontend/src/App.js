import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Card } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Projects from "./components/pages/projects/Projects";
import SideBar from "./components/SideBar/SideBar";
import AddProject from "./components/pages/projects/AddProject";

import "./app.css";
import Tasks from "./components/pages/tasks/Tasks";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Card maxWidth="md">
          <div class="app">
            <NavBar />
            <SideBar />
            <div className="main">
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/projects" component={Projects} />
              <Route path="/addproject" component={AddProject} />
              <Route path="/tasks" component={Tasks} />
            </div>
          </div>
        </Card>
      </BrowserRouter>
    </>
  );
};

export default App;
