// React Router page: https://github.com/ReactTraining/react-router
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Main from 'components/Main';
import Home from 'components/Home';


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
