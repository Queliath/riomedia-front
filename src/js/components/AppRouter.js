import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';



export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/about' component={AboutPage}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
);