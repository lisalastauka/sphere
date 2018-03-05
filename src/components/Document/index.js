import React from 'react';
import { Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';
import Container, { CarouselBox, Inner } from './styled';

export default () => (
  <Container id="document">
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Inner>
      <Col xs={12} md={7}>
        <p>
          Конструктор договоров, быстро соединит платеж <br />  с документом, а также вы сможете подписать его <br />   и проконтролировать сроки платежа.
        </p>
      </Col>
      <CarouselBox>
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
      </CarouselBox>
  </Inner>
</Container>
);
