import React from 'react';
import { Row , Col } from 'react-flexbox-grid';

export default () => (
  <Row>
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Col xs={12} md={7}>
      <p style={{ marginBottom: '40px' }}>
        Конструктор договоров, быстро соединит платеж <br />  с документом, а также вы сможете подписать его <br />   и проконтролировать сроки платежа.
      </p>
    </Col>
    <Col xs={12} md={5}>
      <img alt='' src='images/document.png' style={{ width: '295px', margin: '35px auto 140px',
display: 'block'}}/>
    </Col>
  </Row>
);
