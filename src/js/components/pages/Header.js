import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to='/'>Riomedia</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to='/' activeClassName='menu selected' exact>Главная</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to='/about' activeClassName='menu selected'>О нас</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export { Header };