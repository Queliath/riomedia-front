import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem, Row, Col, Container
} from 'reactstrap';

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
      <header className="mb-2 bg-white">
        <div className="topbar">
          <div className="topbarouter">
            <Container>
              <Row>
                <Col xs="6" md="3" lg="3" className="my-2">
                  ПН-ПТ 08:00-20:00
                </Col>
                <Col xs="6" md="3" lg="3" className="my-2">
                  <a className="topbar-item" href="mailto:riomedia@ramble.ru">riomedia@ramble.ru</a>
                </Col>
                <Col xs="6" md="3" lg="3" className="my-2">
                  <a className="topbar-item tel" href="tel:+37529673222">+375 (29) 67-32-22</a>
                </Col>
                <Col xs="6" md="3" lg="3" className="my-2">
                  <NavLink to="/contacts" className="topbar-item" onClick={_this.handleNavClick}>
                    Минск , ул. Дзержинского, дом 6
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Container>
          <Navbar className="navbar navbar-expand-md navbar-light py-3" light expand="md">
            <NavLink key="brand" to="/" className="rio-logo" onClick={_this.handleNavClick}/>
            <NavbarToggler onClick={_this.toggle} />
            <Collapse isOpen={_this.state.isOpen} navbar>
              <Nav className="ml-auto text-uppercase text-nowrap font-weight-bold" navbar>
                { navItems }
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}

export { Header };