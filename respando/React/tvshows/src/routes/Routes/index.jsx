import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Series } from '../../containers';
import { ROOT, ABOUT, SERIES } from '../paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={SERIES} component={Series} />
  </Switch>
);

export default Routes;
