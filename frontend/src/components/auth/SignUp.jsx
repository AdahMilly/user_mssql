import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import { signUp } from "../../redux/actions/authActions";
import { useHistory } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@mui/material";
import { Typography, TextField, Button } from "@material-ui/core";

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

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth?.singUpLoading);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignUpCallback = (error) => {
    if (error) {
      console.log(error);
    } else {
      history.push("/dashboard");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(credentials, handleSignUpCallback));
  };

  const onSignUp = () => {
    window.localStorage.setItem("isAuthenticated", true);
  };

  return (
    <>
      <form
          noValidate
          autoComplete="off"
          className={classes.formStyle}
          onSubmit={handleSubmit}
      >
        <Typography variant="h5">Create Account</Typography>
        <TextField
          className={classes.spacing}
          id="first-name"
          label="firstName"
          variant="outlined"
          fullWidth
          value={credentials.firstName}
          onChange={(e) =>
            setCredentials({ ...credentials, firstName: e.target.value })
          }
        />
        <TextField 
           className={classes.spacing}
           id="last-name"
           label="lastName"
           variant="outlined"
           fullWidth
           value={credentials.lastName}
           onChange={(e) =>
            setCredentials({ ...credentials, lastName: e.target.value })
          }
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
          onClick={onSignUp}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20}/> }
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;