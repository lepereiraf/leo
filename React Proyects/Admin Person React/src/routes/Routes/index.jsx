import React from "react";
import { Route, Switch } from "react-router-dom";

//import { Example } from '../../containers';
import Persons from "../../containers/HomePerson";
import { ROOT, ADD } from "../paths";
import Form from "../../containers/Form";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Persons} />
    <Route exact path={ADD} component={Form} />
  </Switch>
);

export default Routes;
