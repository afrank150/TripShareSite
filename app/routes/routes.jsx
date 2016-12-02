// React Router page: https://github.com/ReactTraining/react-router
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Main from 'components/Main';
import Home from 'components/Home';
import Trips from 'components/Trips';
import MyTrips from 'components/Trips/MyTrips';
import TripMap from 'components/TripMap';
import NotFound from 'components/NotFound';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="trips" component={Trips}>
        <Route path=":userName" component={MyTrips} />
      </Route>
      <Route path="trips/:userName/:tripName" component={TripMap} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
