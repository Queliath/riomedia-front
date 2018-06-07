import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <Container>
            <Row>

              <Col lg="4" md="4" xs="12" className="footer-item">
                <a className="topbar-item tel" href="tel:+37529673222">+375 (29) 67-32-22</a>
                <span>Позвоните нам</span>
              </Col>
              <Col lg="4" md="4" xs="12" className="footer-item">
                <a className="topbar-item" href="mailto:riomedia@ramble.ru">riomedia@ramble.ru</a>
                <span>Отправьте нам сообщение</span>
              </Col>
              <Col lg="4" md="4" xs="12" className="footer-item">
                <NavLink to="/contacts" className="topbar-item">
                  Приходите к нам в офис
                </NavLink>
                <span>Получите бесплатную консультацию</span>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export { Footer };