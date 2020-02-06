import React from "react";
import { Route, Switch } from "react-router-dom";

//import { Example } from "../../containers";

import Home from "../../containers/Home";
import NewApp from "../../containers/NewApp";
import EditApp from "../../containers/EditApp";

import { ROOT, NEW, EDIT } from "../paths";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={NEW} component={NewApp} />
    <Route exact path={EDIT} component={EditApp} />
  </Switch>
);

export default Routes;
