import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { routes } from './RouterLinks';
import { Footer } from '../pages/Footer';
import {Header} from "../pages/header/Header";

class Router extends React.Component {
 render() {
   let menuLinks = [];
   let routerLinks = routes.map(route => {
     menuLinks.push({
       path: route.path,
       label: route.label
     });
     return <Route path={ route.path } exact={ route.exact } component={ route.component }/>
   });
   return (
     <BrowserRouter>
       <Fragment>
         <Header links={ menuLinks } />
         <Switch>
           {routerLinks}
           <Redirect to="/"/>
         </Switch>
         <Footer />
       </Fragment>
     </BrowserRouter>
   );
 }
}
export { Router }

