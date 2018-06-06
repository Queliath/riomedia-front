import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  handleNavClick = () => {
    this.setState({isOpen: false});
  };


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let _this= this;
    let navItems = _this.props.links.map(item => {
      return (
        <NavItem key={item.path}>
          <NavLink to={item.path} className="nav-link" activeClassName='active' exact onClick={_this.handleNavClick}>{item.label}</NavLink>
        </NavItem>
      );
    });

    return (
      <header className="shadow-sm p-3 mb-2 bg-white">
        <Navbar className="navbar navbar-expand-md navbar-light container" light expand="md">
          <NavbarBrand>
            <NavLink to="/" onClick={_this.handleNavClick}>{_this.props.appName}</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={_this.toggle} />
          <Collapse isOpen={_this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { navItems }
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export { Header };