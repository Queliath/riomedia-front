import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';
class HomePage extends Component {
  render() {
    return (
      <div className="rio-home">
        <Container>
          <Row>
            <Col xs="12" md="7" lg="7" >
              <Jumbotron>
                <h1 className="display-5">Изготовление наружной рекламы в Минске</h1>
                <p>
                  Человек, который дорожит своим бизнесом,
                  ни за что в жизни не станет экономить на рекламе.
                  Но такое многообразие способов рекламы товаров и услуг заставляет людей долго анализировать
                  и выбирать изготовителя.
                </p>
                <hr className="my-2" />
                <p>Рекламно - производственная компания «РиоМедиа»
                  специализируется на изготовлении и размещении наружной рекламы в Минске.
                  Мы имеем собственную производственную базу и производим объекты наружной рекламы из современных и долговечных материалов.</p>
                <p className="lead">
                  <Button color="primary">Заказать рекламу</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export { HomePage };