import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';

export default () => (
  <div>
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Row style={{backgroundSize: 'contain', background: 'url(images/document.png) 90% center / 27% no-repeat'}}>
    <Col xs={12} md={7}>
      <p style={{ marginBottom: '40px' }}>
        Конструктор договоров, быстро соединит платеж <br />  с документом, а также вы сможете подписать его <br />   и проконтролировать сроки платежа.
      </p>
    </Col>
      <div style={{width: '100vw',
      margin: '0',
      position: 'relative',
      overflow: 'overlay',
      display: 'block'}}>
        <Carousel
          {...{
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2500
          }}
        >
          <img style={{padding: '0 15px'}} alt='' src={'images/contract.png'}/>
          <img style={{padding: '0 15px'}} alt='' src={'images/contract.png'}/>
          <img style={{padding: '0 15px'}} alt='' src={'images/contract.png'}/>
          <img style={{padding: '0 15px'}} alt='' src={'images/contract.png'}/>
          <img style={{padding: '0 15px'}} alt='' src={'images/contract.png'}/>
        </Carousel>
      </div>
  </Row>
</div>
);
