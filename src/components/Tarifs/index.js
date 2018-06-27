import React from 'react';
import { Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';
import Link from '../Link';
import Button from './../Button';

import Container, { Size, CarouselBox, CarouselItem, Modes } from './styled';

const tarifs = [
  <Size id="tariff_s">
    <img alt='' src={'images/S.svg'}/>
    <ul>
      <li> <b>90₽</b> за внешний перевод</li>
      <li> <b>Бесплатные</b> переводы для&nbsp;ИП на&nbsp;личную карту БКС&nbsp;Банка <b>до&nbsp;150&nbsp;тыс.&nbsp;₽ </b></li>
    </ul>
    <div>
      <h3>
        Бесплатно
      </h3>
    </div>
    <a href="https://sfera.ru/registration?tariff=S" target="_self">
      <Button className="choose tariff" outline wide>
        Выбрать тариф
      </Button>
    </a>
  </Size>,
  <Size id="tariff_m">
    <img alt='' src={'images/M.svg'}/>
    <ul>
      <li> <b>Бесплатно 5</b> внешних переводов, остальные − 40₽</li>
      <li> <b>Бесплатные</b> переводы для&nbsp;ИП на&nbsp;личную карту БКС&nbsp;Банка <b>до&nbsp;300&nbsp;тыс.&nbsp;₽ </b></li>
    </ul>
    <div>
      <h3>
        3 месяца бесплатно
      </h3>
      <small>после 599₽&nbsp;в&nbsp;месяц</small>
    </div>
    <a href="https://sfera.ru/registration?tariff=M" target="_self">
      <Button className="choose tariff" outline wide>
        Выбрать тариф
      </Button>
    </a>
  </Size>,
  <Size id="tariff_l">
    <img alt='' src={'images/L.svg'}/>
    <ul>
      <li> <b>Бесплатно 15</b> внешних переводов, остальные − 30₽</li>
      <li> <b>Бесплатные</b> переводы для&nbsp;ИП на&nbsp;личную карту БКС&nbsp;Банка <b>до&nbsp;500&nbsp;тыс.&nbsp;₽ </b></li>
    </ul>
    <div>
      <h3>
        3 месяца бесплатно
      </h3>
      <small>после 899₽&nbsp;в&nbsp;месяц</small>
    </div>
    <a href="https://sfera.ru/registration?tariff=L" target="_self">
      <Button className="choose tariff" outline wide>
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
    <Link href='https://bcs-bank.com/f/business/sme/tariffs.pdf?v7' target='_blank' ><img alt='' style={{margin: '5px', verticalAlign: 'middle'}} src='images/pdf.png'/>Подробное описание тарифов</Link>
  </Container>
);
