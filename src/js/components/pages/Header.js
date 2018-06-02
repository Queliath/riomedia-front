import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light alert-dark">
    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to='/' activeClassName='menu selected' exact={true}>Главная</NavLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);