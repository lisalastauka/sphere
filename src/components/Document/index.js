import React from 'react';
import Container, { CarouselBox, Inner, ShadowCarousel, Column } from './styled';
import Chips from '../Chips';

export default () => (
  <Container id="document">
    <h2>Создавайте и подписывайте документы <span style={{whiteSpace: 'nowrap'}}>онлайн <Chips>Скоро</Chips></span></h2>
    <Inner>
      <Column xs={12} md={7}>
        <p>
          Конструктор договоров быстро соединит платеж с&nbsp;документом, а&nbsp;также вы&nbsp;сможете подписать его и&nbsp;проконтролировать сроки платежа.
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
            autoplaySpeed: 2500,
            adaptiveHeight: false,
            responsive: [
              {
                breakpoint: 608,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              }
            ],
          }}
        >
          <img alt='' src={'images/documents/01.png'}/>
          <img alt='' src={'images/documents/02.png'}/>
          <img alt='' src={'images/documents/03.png'}/>
          <img alt='' data-src={'images/documents/04.png'}/>
          <img alt='' data-src={'images/documents/05.png'}/>
        </ShadowCarousel>
      </CarouselBox>
  </Inner>
</Container>
);
