import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Projects from './components/pages/Projects';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {<NavBar />}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Projects} />
      </BrowserRouter>
    </>
  );
};

export default App;
