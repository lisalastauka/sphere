import React from 'react';
import { Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';
import Link from '../Link';
import Button from './../Button';

import Container, { Size, CarouselBox, CarouselItem, Modes } from './styled';

const tarifs = [
  <Size>
    <img alt='' src={'images/S.svg'}/>
    <ul>
      <li> <b>90₽ за перевод</b> только внешним юр. лицам</li>
      <li> <b>150 тыс. ₽ перевод</b> на личную карту БКС </li>
    </ul>
    <div>
      <h3>
        Бесплатно
      </h3>
    </div>
    <a href="https://sme.bcs-bank.com/registration?tariff=S" target="_self">
      <Button outline wide>
        Выбрать тариф
      </Button>
    </a>
  </Size>,
  <Size>
    <img alt='' src={'images/M.svg'}/>
    <ul>
      <li> <b>5 платежей бесплатно,</b> остальные 40₽ за внешний перевод юр. лицам</li>
      <li> <b>300 тыс. ₽ перевод</b> на личную карту БКС</li>
    </ul>
    <div>
      <h3>
        599₽ / месяц
      </h3>
    </div>
    <a href="https://sme.bcs-bank.com/registration?tariff=M" target="_self">
      <Button outline wide>
        Выбрать тариф
      </Button>
    </a>
  </Size>,
  <Size>
    <img alt='' src={'images/L.svg'}/>
    <ul>
      <li> <b>15 платежей бесплатно,</b> остальные 30₽ за внешний перевод юр. лицам</li>
      <li> <b> 500 тыс. ₽ перевод </b> на личную карту БКС</li>
    </ul>
    <div>
      <h3>
        899₽ / месяц
      </h3>
    </div>
    <a href="https://sme.bcs-bank.com/registration?tariff=L" target="_self">
      <Button outline wide>
        Выбрать тариф
      </Button>
    </a>
  </Size>

];
export default () => (
  <Container id="tarifs">
    <Modes>
      {tarifs.map((tarif, i) => (
        <Col key={i} xs={4}>
          {tarif}
        </Col>
      ))}
    </Modes>
    <CarouselBox>
      <Carousel
        {...{
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          infinite: false,
        }}
      >
        {tarifs.map((tarif, i) => (
          <CarouselItem key={i} >
            {tarif}
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselBox>
    <Link href='tarifs.pdf' target='_blank' ><img alt='' style={{margin: '5px', verticalAlign: 'middle'}} src='images/pdf.png'/>Подробное описание тарифов</Link>
  </Container>
);
