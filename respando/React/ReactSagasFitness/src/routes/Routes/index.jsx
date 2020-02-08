import React from "react";
import { Route, Switch } from "react-router-dom";

//import { Example } from "../../containers";
import Home from "../../containers/Home";
import AddEjercicio from "../../components/formularioEj";
import { ROOT, ADD } from "../paths";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ADD} component={AddEjercicio} />
  </Switch>
);

export default Routes;
