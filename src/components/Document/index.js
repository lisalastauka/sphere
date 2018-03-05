import React from 'react';
import { Col } from 'react-flexbox-grid';
import Container, { CarouselBox, Inner, ShadowCarousel } from './styled';

export default () => (
  <Container id="document">
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Inner>
      <Col xs={12} md={7} style = {{
        marginBottom: '-10%'
      }}>
        <p>
          Все договоры, акты, счета и&nbsp;остальные документы создаются автоматически, подписываются электронной подписью и&nbsp;привязываются к&nbsp;платежам, чтобы контролировать сроки оплаты и&nbsp;оформлять сделки быстро и&nbsp;правильно.
        </p>
      </Col>
      <CarouselBox>
        <ShadowCarousel
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
        </ShadowCarousel>
      </CarouselBox>
  </Inner>
</Container>
);
