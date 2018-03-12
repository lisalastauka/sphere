import React from 'react';
import { Col } from 'react-flexbox-grid';
import Carousel from './../Carousel';
import Link from '../Link';
import Button from './../Button';

import Container, { Size, CarouselBox, CarouselItem, Modes } from './styled';

export default () => (
  <Container id="tarifs">
    <Modes>
      <Col xs={4}>
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
          <Button outline wide>
            Выбрать тариф
          </Button>
        </Size>
      </Col>
      <Col xs={4}>
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
          <Button outline wide>
            Выбрать тариф
          </Button>
        </Size>
      </Col>
      <Col xs={4}>
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
          <Button outline wide>
            Выбрать тариф
          </Button>
        </Size>
      </Col>
    </Modes>
    <CarouselBox>
      <Carousel
        {...{
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          infinite: true,
        }}
      >
        <CarouselItem>
          <Size>
            <img alt='' src={'images/S.svg'}/>
            <ul>
              <li> <b>90₽</b> за внешний перевод</li>
              <li> <b>1%</b> за внесение наличных через банкомат </li>
            </ul>
            <div>
              <h3>
                Бесплатно
              </h3>
            </div>
            <Button outline wide>
              Выбрать тариф
            </Button>
          </Size>
        </CarouselItem>
        <CarouselItem>
          <Size>
            <img alt='' src={'images/M.svg'}/>
            <ul>
              <li> <b>5 платежей бесплатно,</b> остальные 40₽ за перевод  юр. лицам</li>
              <li> <b>0,5% за внесение</b> наличных через банкомат </li>
            </ul>
            <div>
              <h3>
                599₽ / месяц
              </h3>
              <small>449₽ (при оплате за год)</small>
            </div>
            <Button outline wide>
              Выбрать тариф
            </Button>
          </Size>
        </CarouselItem>
        <CarouselItem>
          <Size>
            <img alt='' src={'images/L.svg'}/>
            <ul>
              <li> <b>15 платежей бесплатно,</b> остальные 30₽ за перевод  юр. лицам</li>
              <li> <b>Бесплатное внесение</b> наличных через банкомат</li>
            </ul>
            <div>
              <h3>
                899₽ / месяц
              </h3>
              <small>674₽ (при оплате за год)</small>
            </div>
            <Button outline wide>
              Выбрать тариф
            </Button>
          </Size>
        </CarouselItem>
      </Carousel>
    </CarouselBox>
    <Link href='#' ><img  alt='' style={{margin: '5px', verticalAlign: 'middle'}} src='images/pdf.png'/>Подробное описание тарифов</Link>
  </Container>
);
