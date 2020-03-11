import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import SingleTour from "../pages/tours/SingleTour";

const DefaultSwitch = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tours/:tourName" component={SingleTour} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

class Main extends Component {
  render() {
    let routes = <DefaultSwitch />;
    return routes;
  }
}

export default Main;
