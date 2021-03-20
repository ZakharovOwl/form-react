import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Login from "./components/Login";
import Registration from "./components/Registration";
import Answers from "./components/Answers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/registration" component={Registration} />
          <Route path="/answers" component={Answers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
