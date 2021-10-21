import React from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Card } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SideBar from "./components/SideBar/SideBar";
import Tasks from "./components/pages/tasks"
// import { loadUser } from "./store/actions/authActions";

import "./app.css";
import Progress from "./components/pages/Progress";
import ProtectedRouter from "./components/routerHandler/protectedRouter";
import Projects from "./components/pages/Projects";
import ProjectForm from "./components/pages/projectForm";
import TaskForm from "./components/pages/taskForm";

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loadUser())
  // }, [dispatch])
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
                <Route path="/dashboard" component={Projects} />
                <Route path="/projectform" component={ProjectForm} />
                <Route path="/taskform" component={TaskForm} />
                <ProtectedRouter path="/tasks" component={Tasks} />
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
