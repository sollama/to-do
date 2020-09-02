import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Home";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

ReactDOM.render(
  <div>
    <Router history={createBrowserHistory()}>
      <Nav />
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => <App />} />
          <Route path="/about" component={About} />
          <Route exact path="*" render={(props) => <App />} />
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);
