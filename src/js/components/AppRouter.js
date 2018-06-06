import React, { Fragment } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { routes } from './AppRouterLinks';
import { Header } from './pages/header/Header';
import { Footer } from './pages/Footer';

class AppRouter extends React.Component {
 render() {
   let links = routes.map(route => ({
     path: route.path,
     label: route.label
   }));
   return (
     <BrowserRouter>
       <Fragment>
         <Header links={ links } />
         {renderRoutes(routes)}
         <Redirect to="/" />
         <Footer />
       </Fragment>
     </BrowserRouter>
   );
 }
}
export { AppRouter }

