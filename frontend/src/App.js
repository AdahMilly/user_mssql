import React, { useEffect } from "react";
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
import { getUser } from "./utils/setUser";
import { useDispatch } from "react-redux";
import authActionCreators from "./redux/actionCreators/auth.actions";

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
