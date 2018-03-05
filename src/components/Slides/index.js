import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Colored from './../Colored';
import Container, { Slides, Slide, Inner } from './styled';
import Button, { ButtonGroup } from './../Button';

export default () => (
  <Container id="slides" >
    <h2>Можно работать без <Colored>бухгалтера</Colored></h2>
    <p>
      Посчитаем налоги и отправим отчетность. Напомним когда <br/> нужно заплатить налоги и взносы, чтобы сэкономить.
    </p>
    <Slides>
      <Slide backward >
        <h6>Пора готовить декларацию для налоговой</h6>
      </Slide>
      <Slide center >
        <h5>Пора готовить декларацию для налоговой</h5>
      </Slide>
      <Slide >
        <Inner>
          <h5>Рекомендуем заплатить страховые взносы за I квартал</h5>
          <Row>
            <Col xs={12} sm={6} md={7}>
              <small>
                Оплатите страховые взносы до 31 марта 2018 года на сумму 8 096,25₽, чтобы уменьшить сумму авансового платежа за I квартал.
              </small>
            </Col>
            <Col xs={12} sm={6} md={5} style ={{ display: 'flex', justifyContent: 'flex-end'}} >
              <ButtonGroup>
                <Button style={{padding: '13px 38px'}} inactive disabled outline type="button">Оплатить</Button>
                <Button inactive disabled outline small type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  &#8226; &#8226; &#8226;
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Inner>
        <Button disabled footer type="button">Оплатить</Button>
      </Slide>
    </Slides>
  </Container>
);
