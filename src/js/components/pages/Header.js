import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="rio-logo" to='/'>Riomedia</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" activeClassName='menu selected' exact>Главная</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link" activeClassName='menu selected'>О нас</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export { Header };