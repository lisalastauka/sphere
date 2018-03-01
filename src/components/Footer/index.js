import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Link from '../Link';
import Button from './../Button';
import { Footer, Links } from './styled';

export default () => (
  <Footer>
    <Row around='xs' style={{ margin: '0 auto', maxWidth: '1280px'}}>
      <Col
        xs={8}
        style={{ maxWidth: '860px' }}
      >
        <Row>
          <Col xs>
            <h3>Ответим на ваши вопросы</h3>
          </Col>
          <Col xs style={{textAlign: 'right', marginBottom: '50px'}}>
            <small>Или позвоните по бесплатному номеру</small>
            <br />
            <Link href='tel:88005007065'>8 800 500 70 65</Link>
          </Col>
          {/*<img src='images/chat.png' style={{width: '860px', height: '220px', marginBottom: '50px'}} />*/}
        </Row>
        <Links>
          <Row>
            <Col xs={4}>
              <Link href='#'>Смотреть тарифы</Link>
              <Link href='#'>Отделения банка</Link>
            </Col>
            <Col xs={4}>
              <Link href='#'>Документы</Link>
              <Link href='#'>Банковская лицензия</Link>
            </Col>
          </Row>
        </Links>
        <div style={{ margin: '60px 0'}}>
          <Button opaque>
            Доступно в<br /> <b> любом браузере</b>
          </Button>
          <Button opaque>
            <Row>
              <Col xs={0}>
                <br />
              </Col>
              <Col xs={3}>
                <img alt='' src='images/gplay.svg' />
              </Col>
              <Col xs={9}>
                Скачайте в<br /> <b>Google play</b>
              </Col>
            </Row>
          </Button>
          <Button opaque>
            <Row>
              <Col xs={0}>
                <br />
              </Col>
              <Col xs={3}>
                <img alt='' src='images/appstore.svg' />
              </Col>
              <Col xs={9}>
                Скачайте в<br /> <b>App Store</b>
              </Col>
            </Row>
          </Button>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.8)'}}>
          Банковские услуги предоставляются Акционерным обществом «БКС — Инвестиционный Банк», Генеральная лицензия ЦБ РФ № 101 от 15.12.2014 г. Выдана без ограничения срока действия. Официальный сайт http://www.bcs-bank.com. Услуги по размещению денежных средств во вклады предоставляются Акционерным общество «БКС — Инвестиционный Банк», а также иными кредитными организациями - партнерами Акционерного общества «БКС — Инвестиционный Банк».
        </p>
      </Col>
      <Col xs={4} style={{ maxWidth: '400px' }} />
    </Row>
  </Footer>
);
