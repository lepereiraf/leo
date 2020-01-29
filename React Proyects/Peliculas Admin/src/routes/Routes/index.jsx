import React from "react";
import { Route, Switch } from "react-router-dom";

//import { Example } from '../../containers';
import Home from "../../containers/Home";
import { ROOT } from "../paths";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
  </Switch>
);

export default Routes;
