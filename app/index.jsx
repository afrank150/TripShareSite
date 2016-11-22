import React from 'react';
import { render } from 'react-dom';
import routes from './routes/routes.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  routes, document.getElementById('app')
);
