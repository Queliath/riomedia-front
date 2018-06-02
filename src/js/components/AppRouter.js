import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './pages/Header';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);