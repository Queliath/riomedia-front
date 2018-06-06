import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
class HomePage extends Component {
  render() {
    return (
      <div className="rio-content">
        <Row>
          <Col className="col-md-5">
            <Jumbotron>
              <h3>Изготовление наружной рекламы в Минске</h3>
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
                <Button color="primary">Отправить заявку</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}
export { HomePage };