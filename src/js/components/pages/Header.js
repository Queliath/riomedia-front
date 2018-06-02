import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar alert-dark">
    <ul className="navbar-nav mr-auto">
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
  </nav>
);