import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import SingleTour from "../pages/tours/SingleTour";

const DefaultSwitch = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/tours/:tourName" component={SingleTour} />

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
