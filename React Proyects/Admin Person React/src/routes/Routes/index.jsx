import React from "react";
import { Route, Switch } from "react-router-dom";

//import { Example } from '../../containers';
import Persons from "../../containers/HomePerson";
import { ROOT, ADD, EDIT } from "../paths";
import Form from "../../containers/Form";

import FormEdit from "../../containers/FormEdit";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Persons} />
    <Route exact path={ADD} component={Form} />
    <Route exact path={EDIT} component={FormEdit} />
  </Switch>
);

export default Routes;
