import React, { useState} from "react";

import useFetch from "../../hooks/useFetch"

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { URL } from "../../backend/index";
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
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const {loading, error, data, methodFunctions} = useFetch(URL+"auth/loginUser",{method:"POST"})

  console.log({loading, error,data})

  const handleSubmit = (e) => {
    e.preventDefault();
    methodFunctions(credential)
    setCredential({ email: "", password: "" });
  };

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
          value={credential.email}
          onChange={(e) => setCredential({ ...credential, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={credential.password}
          onChange={(e) => setCredential({ ...credential, password: e.target.value })}
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