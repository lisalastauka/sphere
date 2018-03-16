import React from 'react';
import Container, { CarouselBox, Inner, ShadowCarousel, Column } from './styled';

export default () => (
  <Container id="document">
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Inner>
      <Column xs={12} md={7}>
        <p>
          Конструктор договоров, быстро соединит платеж  с&nbsp;документом, а&nbsp;также вы&nbsp;сможете подписать его  и&nbsp;проконтролировать сроки платежа.
        </p>
      </Column>
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
          <img alt='' src={'images/documents/0.jpg'}/>
          <img alt='' src={'images/documents/1.jpg'}/>
          <img alt='' src={'images/documents/2.jpg'}/>
          <img alt='' src={'images/documents/3.jpg'}/>
          <img alt='' src={'images/documents/4.jpg'}/>
        </ShadowCarousel>
      </CarouselBox>
  </Inner>
</Container>
);
