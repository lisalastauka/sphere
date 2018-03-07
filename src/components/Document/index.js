import React from 'react';
import Container, { CarouselBox, Inner, ShadowCarousel, Column } from './styled';

export default () => (
  <Container id="document">
    <h2>Создавайте и подписывайте документы онлайн</h2>
    <Inner>
      <Column xs={12} md={7}>
        <p>
          Все договоры, акты, счета и&nbsp;остальные документы создаются автоматически, подписываются электронной подписью и&nbsp;привязываются к&nbsp;платежам, чтобы контролировать сроки оплаты и&nbsp;оформлять сделки быстро и&nbsp;правильно.
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
          <img alt='' src={'images/documents/1.png'}/>
          <img alt='' src={'images/documents/2.png'}/>
          <img alt='' src={'images/documents/3.png'}/>
          <img alt='' src={'images/documents/4.png'}/>
        </ShadowCarousel>
      </CarouselBox>
  </Inner>
</Container>
);
