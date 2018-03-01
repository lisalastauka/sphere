import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Button from './../Button';

import SideBar from './styled';

export default () => (
  <SideBar>
    <Row between='xs' style={{ padding: '20px 40px', borderBottom: '1px solid rgba(214,214,214,0.4)'}}>
      <Col>
        <small style={{color: '#1A3869'}}>Скоро</small><br/>
        <small>Демо-доступ</small>
      </Col>
      <Col>
        <Button outline>Вход</Button>
      </Col>
    </Row>
    <Row style={{ padding: '20px 40px', flex: '1 0 auto', justifyContent: 'center',
    flexDirection: 'column', textAlign: 'center' }}>
      <small style={{ fontSize: '16px',  textAlign: 'left'}}>
        Вы получаете:
      </small>
      <ul style={{ textAlign: 'left'}}>
        <li>Надежный банк</li>
        <li>Реквизиты сразу</li>
        <li>Карта для бизнеса</li>
        <li>7% годовых на остаток</li>
        <li>Большие лимиты на вывод</li>
        <li>Посчитаем налоги</li>
        <li>Объединение счетов</li>
        <li>Создание документов</li>
        <li>Выгодные тарифы</li>
      </ul>
      <p style={{ fontSize: '16px'}}>Оставьте заявку и вам забронируют счет</p>
      <Button wide>Бесплатно открыть счет</Button>
      <small>Откроем счет за 4 минуты</small>
    </Row>
  </SideBar>
);
