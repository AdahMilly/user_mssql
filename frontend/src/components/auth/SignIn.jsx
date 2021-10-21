import React, { useState} from "react";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/authActions";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { withRouter } from "react-router";


const useStyles = makeStyles({
  formStyle: {
    margin: "70px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    width:"40%"
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(credentials))
    setCredentials({
      email:"",
      password:"",
    })
  };
  if(auth._id) return <Redirect to="/dashboard"/>

  const onLogin = () => {
    window.localStorage.setItem("isAuthenticated", true)
  }


  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Sign In</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
          onClick={onLogin}
        >
          SignIn
        </Button>
      </form>
    </>
  );
};

export default withRouter(SignIn);