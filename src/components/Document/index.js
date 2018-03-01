import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';
import { CarouselBox, CarouselItem } from '../Tarifs/styled';

export default () => (
  <div>
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Row style={{backgroundSize: 'contain', background: ' url(images/document.png) right /33% no-repeat'}}>
    <Col xs={12} md={7}>
      <p style={{ marginBottom: '40px' }}>
        Конструктор договоров, быстро соединит платеж <br />  с документом, а также вы сможете подписать его <br />   и проконтролировать сроки платежа.
      </p>
    </Col>

    {/*  <img alt=''
        src='images/document.png'
        style={{ width: '295px', margin: '35px auto 140px', display: 'block'}}
      /> */}
      <div style={{width: '100vw',
      margin: '0',
      position: 'relative',
      overflow: 'overlay',
      display: 'block'}}>
        <Carousel
          {...{
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            autoplay: true,
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
