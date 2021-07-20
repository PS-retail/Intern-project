import React, { useState, useContext, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useHttpClient } from "../general/http-hook";
import Logo from "../../assets/bang-and-olufsen.png";
import LoginField from "./loginField";
import { AuthContext } from "../general/auth-context";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.publicissapient.com/">
        RetailPS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.ctfassets.net/8cd2csgvqd3m/4xozbbqtxcvIr61vK48ND/1d304bf6b0dba20ab69c1234a899276c/Explore_anthra_sb2.jpg?q=90&fm=webp&w=720&h=1440&fit=fill)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    margin: theme.spacing(1),
    width: "auto",
    height: "auto",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const methods = useForm();

  const [error, setError] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const prevMode = useRef();

  const { sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const projectID = "2a9c8e7f-3b93-498c-88e1-97570d0d528d";

  useEffect(() => {
    if (auth.isLoggedIn && !!auth.username && !!auth.password) {
      history.push("/");
    }
  }, [auth.isLoggedIn, auth.username, auth.password, history]);

  const until = (cb) => {
    const poll = (resolve) => {
      if (!cb()) resolve();
      else setTimeout(() => poll(resolve), 400);
    };

    return new Promise(poll);
  };

  const submitHandler = methods.handleSubmit(async (data) => {
    await until(() => prevMode.current === loginMode);


    if (loginMode) {
      const authObject = {
        "Project-ID": projectID,
        "User-Name": data.username,
        "User-Secret": data.password,
      };

      try {
        await sendRequest({
          url: "https://api.chatengine.io/chats",
          method: "get",
          headers: authObject,
        });
        auth.login(data.username, data.password);
      } catch (err) {
        setError("Invalid credentials! Please try again.");
      }
    } else {
      const body = {
        username: data.username,
        secret: data.password,
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
      };
      try {
       await sendRequest({
          url: "https://api.chatengine.io/users/",
          method: "post",
          data: body,
        });
        auth.login(data.username, data.password);
        const authObject = {
          "Project-ID": projectID,
          "User-Name": data.username,
          "User-Secret": data.password,
        };
        const chat = { "usernames": ["retailps"] , "title" : `Customer Service for ${data.username}`};
        await sendRequest({url: 'https://api.chatengine.io/chats/', method: 'put', data: chat, headers: authObject});
      } catch (err) {
        console.log(err);
      }
    }
  });

  const modeChangeHandler = () => {
    prevMode.current = loginMode;
    setLoginMode((prevState) => !prevState);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} alt="Login_logo" className={classes.logo} />
          <Typography component="h1" variant="h5">
            {loginMode ? "Sign in" : "Register"}
          </Typography>
          <Typography variant="h6" style={{ color: "red" }}>
            {error}
          </Typography>
          <FormProvider {...methods}>
            <form className={classes.form} noValidate onSubmit={submitHandler}>
              {!loginMode && (
                <LoginField name={"firstName"} required label={"First Name"} />
              )}
              {!loginMode && (
                <LoginField name={"lastName"} required label={"Last Name"} />
              )}
              {!loginMode && (
                <LoginField
                  name={"email"}
                  type="email"
                  required
                  label={"email"}
                />
              )}
              <LoginField name={"username"} required label={"username"} />
              <LoginField
                name={"password"}
                required
                label={"password"}
                type="password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {loginMode ? "Sign in" : "Register"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" onClick={modeChangeHandler} variant="body2">
                    {!loginMode
                      ? "Already have an account? Sign In"
                      : "Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </FormProvider>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
