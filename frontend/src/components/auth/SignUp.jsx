import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { signUp } from "../../redux/actions/authActions";

import { makeStyles } from "@material-ui/core/styles";
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
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user))
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  };

  if(auth.user._id) return <Redirect to="/dashboard"/>

  console.log({auth});


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
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <TextField 
           className={classes.spacing}
           id="last-name"
           label="lastName"
           variant="outlined"
           fullWidth
           value={user.lastName}
           onChange={(e) => setUser({...user, lastName: e.target.value})}
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="enterEmail"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="enterPassword"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.spacing}
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </>
  );
};

export default SignUp;