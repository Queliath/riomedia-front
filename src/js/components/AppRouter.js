import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { routes } from './AppRouterLinks';
import { Header } from './pages/header/Header';
import { Footer } from './pages/Footer';

class AppRouter extends React.Component {
 render() {
   let links = routes.map(route => {
     return {
       path: route.path,
       label: route.label
     }
   });
   return (
     <BrowserRouter>
       <Fragment>
         <Header links={ links } />
         {renderRoutes(routes)}
         <Footer />
       </Fragment>
     </BrowserRouter>
   );
 }
}
export { AppRouter }

