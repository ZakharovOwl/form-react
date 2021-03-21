import React, { useState } from "react";
//style
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
//components
import Login from "./components/Login";
import Registration from "./components/Registration";
import Answers from "./components/Answers";
import Nav from "./components/Nav";

function App() {
  // токен в localstorage
  const TOKEN_NAME = "token";
  //state
  const [email, setEmail] = useState("ewewfffwe@nedoz3.com");
  const [username, setUsername] = useState("dsddfgfgbbb");
  const [password, setPassword] = useState("password");
  const [answers, setAnswers] = useState(undefined);
  const [avatarFile, setAvatarFile] = useState(undefined);
  const [userImage, setUserImage] = useState(undefined);

  // axios
  const instance = axios.create({
    baseURL: "https://guest-book.naveksoft.com/api/v1",
  });

  const setApiToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
    console.log("token is working");
  };

  const getApiToken = () => {
    const token = localStorage.getItem(TOKEN_NAME);
    if (!token) {
      throw new Error("No token");
    }
    console.log("use token");
    return localStorage.getItem(TOKEN_NAME);
  };

  return (
    <div className="App">
      <Nav />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Registration
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              instance={instance}
              setApiToken={setApiToken}
              username={username}
              setUsername={setUsername}
              avatarFile={avatarFile}
              setAvatarFile={setAvatarFile}
            />
          </Route>
          <Route path="/login">
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              instance={instance}
              setApiToken={setApiToken}
              setUserImage={setUserImage}
            />
          </Route>
          <Route path="/answers">
            <Answers
              instance={instance}
              getApiToken={getApiToken}
              setAnswers={setAnswers}
              userImage={userImage}
              answers={answers}
              username={username}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default App;
