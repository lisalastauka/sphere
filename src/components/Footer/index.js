import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Link from '../Link';
import Button from './../Button';
import { Footer, Links, Column, ButtonGroup, Header, Badge } from './styled';
import { Container } from '../Main/styled';

export default () => (
  <Footer>
    <Container>
      <Col xs={12} lg={8}>
        <Header>
          <Column xs={12} md={6} >
            <h3>Ответим на ваши вопросы</h3>
          </Column>
          <Column right="true" xs={12} md={6}>
            <small>Позвоните по бесплатному номеру</small>
            <br />
            <Link href='tel:88005000305'>8 800 500 03 05</Link>
          </Column>
        </Header>
        <Button style={{ maxWidth: '640px', boxShadow: '0 10px 15px 0 rgba(0,0,0,0.1)'}} onClick={() => window.ThreadsWidget.showChat()} opaque>
          Задать вопрос
        </Button>
        {/*
          <Links>
            <Row>
              <Col xs={12} md={4}>
                <Link href='#'>Смотреть тарифы</Link>
                <br />
                <Link href='#'>Отделения банка</Link>
              </Col>
              <Col xs={12} md={4}>
                <Link href='#'>Документы</Link>
                <br />
                <Link href='#'>Банковская лицензия</Link>
              </Col>
            </Row>
          </Links>
        */}
        <ButtonGroup>
          <Button opaque disabled>
            Доступно в<br /> <b> любом браузере</b>
          </Button>
          <Button badge opaque disabled>
            <Badge>
              <div>
                Скоро
              </div>
            </Badge>
            <Row>
              <Col xs={0}>
                <br />
              </Col>
              <Col  xs={2} sm={1} md={3}>
                <img alt='' src='images/gplay.svg' />
              </Col>
              <Col xs>
                Скачайте в<br /> <b>Google play</b>
              </Col>
            </Row>
          </Button>
          <Button badge opaque disabled>
            <Row>
              <Badge>
                <div>
                  Скоро
                </div>
              </Badge>
              <Col xs={0}>
                <br />
              </Col>
              <Col xs={2} sm={1} md={3}>
                <img alt='' src='images/appstore.svg' />
              </Col>
              <Col xs>
                Скачайте в<br /> <b>App Store</b>
              </Col>
            </Row>
          </Button>
        </ButtonGroup>
        <p style={{ opacity: '0.8'}}>
          Банковские услуги предоставляются Акционерным обществом «БКС — Инвестиционный Банк», Генеральная лицензия ЦБ РФ № 101 от 15.12.2014 г. Выдана без ограничения срока действия. Официальный сайт http://www.bcs-bank.com. Услуги по размещению денежных средств во вклады предоставляются Акционерным общество «БКС — Инвестиционный Банк», а также иными кредитными организациями - партнерами Акционерного общества «БКС — Инвестиционный Банк».
        </p>
      </Col>
      <Col lg={3} />
    </Container>
  </Footer>
);
