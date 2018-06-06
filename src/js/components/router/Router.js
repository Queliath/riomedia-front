import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { routes } from './RouterLinks';
import { Footer } from '../pages/Footer';
import {Header} from "../pages/header/Header";

class Router extends React.Component {
 render() {
   let menuLinks = [];
   let routerLinks = routes.map(route => {
     let path = route.path;
     let label = route.label;
     menuLinks.push({path, label});
     return <Route path={ path } exact={ route.exact } component={ route.component }/>
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

