import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//style
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LoginContent from "./LoginContent";

//yup check errors validate
const schema = yup.object().shape({
  email: yup.string().required().email().max(255),
  password: yup.string().required().min(8),
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  setApiToken,
  instance,
  setUserImage,
  checkLoginStatus,
  setCheckLoginStatus,
  username,
}) => {
  //styles for material-ui
  const classes = useStyles();

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setCheckLoginStatus(!checkLoginStatus);
    if (!checkLoginStatus) {
      history.push("/answers");
      instance
        .post(
          //url
          "/auth/login",
          //данные запроса
          {
            email: email,
            password: password,
          }
        )
        //обрабатываем результат
        .then(function (response) {
          console.log("Я получил:", response.data);
          setUserImage(response.data.user.avatar);
          setApiToken(response.data.token.access_token);
        })
        //обрабатываем ошибку
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      history.push("/login");
    }
    //console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <div className="btn-title">
          <h3>{!checkLoginStatus ? "Login" : "Sing out"}</h3>
        </div>
        {!checkLoginStatus ? (
          <div>
            <p>{errors.email?.message}</p>
            <TextField
              inputRef={register}
              id="outlined-email-input"
              label="Email"
              variant="outlined"
              placeholder="Enter your email."
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <p>{errors.password?.message}</p>
            <TextField
              inputRef={register}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="btn-wrapper">
              <button type="submit">
                {!checkLoginStatus ? "Login" : "Sing out"}
              </button>
            </div>
          </div>
        ) : (
          <LoginContent
            username={username}
            checkLoginStatus={checkLoginStatus}
            setCheckLoginStatus={setCheckLoginStatus}
            history={history}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
