'use strict';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './configureStore';

import Main from '../containers/main.jsx';
import Home from '../containers/home.jsx';
import Sorting from '../containers/sorting.jsx';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/sort" component={Sorting}/>
      </Route>
    </Router>
  </Provider>
);

export default routes;