import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../pages/home";

const DefaultSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

class Main extends Component {
  render() {
    let routes = <DefaultSwitch />;
    return <Switch>{routes}</Switch>;
  }
}

export default Main;
