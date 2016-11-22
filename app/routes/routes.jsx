// React Router page: https://github.com/ReactTraining/react-router
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from 'components/Main';


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
  </Router>
);

export default routes;
