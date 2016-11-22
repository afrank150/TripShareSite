// React Router page: https://github.com/ReactTraining/react-router
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from 'components/Home';


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>
);

export default routes;
