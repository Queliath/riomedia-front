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

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let navItems = this.props.links.map(item => {
      return (
        <NavItem key={item.path}>
          <NavLink to={item.path} className="nav-link" activeClassName='active' exact>{item.label}</NavLink>
        </NavItem>
      );
    });

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">RioMedia</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              { navItems }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export { Header };