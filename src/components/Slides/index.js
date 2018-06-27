import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Container, { Slides, Slide, Inner, H2 } from './styled';
import Button, { ButtonGroup } from './../Button';
import ChangeText from './../ChangeText';

const texts = [
  'бухгалтера',
  'кадровика',
  'финансового аналитика',
  'кадровика'
];

const p = [
  'Посчитаем налоги по УСН 6% и 15% и отправим налоговую декларацию. Напомним, когда нужно платить налоги, чтобы сэкономить.',
  'Сформируем юридически правильный договор с использованием более 1400 шаблонов, сэкономим время и деньги на подготовке первички.',
  'Сделаем вам электронную подпись бесплатно, чтобы подписывать и отправлять и получать документы от клиентов и контрагентов онлайн.',
  'Рассчитываем зарплату и налоги, формируем платежные поручения, напоминаем об оплате зарплаты.',
];

const inner = (
  <Inner>
    <h5>Рекомендуем заплатить страховые взносы за I квартал</h5>
    <Row>
      <Col xs={12} lg={7}>
        <small>
          Оплатите страховые взносы до 31 марта 2018 года на сумму 8 096,25₽, чтобы уменьшить сумму авансового платежа за I квартал.
        </small>
      </Col>
      <Col xs={12} lg={5} style ={{ display: 'flex', justifyContent: 'flex-end'}} >
        <ButtonGroup>
          <Button style={{padding: '13px 38px'}} inactive disabled outline type="button">Оплатить</Button>
          <Button inactive disabled outline small type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            &#8226; &#8226; &#8226;
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Inner>
);

export default () => (
  <Container id="slides" >
    <H2>Можно работать без&nbsp;</H2> <ChangeText inline texts={texts} animation='change1' />
    <p>
      Посчитаем налоги. Напомним, когда нужно заплатить налоги и&nbsp;взносы, чтобы&nbsp;сэкономить.
    </p>
    <Slides>
      <Slide id="slides_1" className="slide-xs" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
      <Slide id="slides_2" className="slide-sm" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
      <Slide className="slide-md" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
      <Slide className="slide-lg" >
        {inner}
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
    </Slides>
  </Container>
);
