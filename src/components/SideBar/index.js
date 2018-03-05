import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import Button from './../Button';
import List from './List';

import SideBar from './styled';

export default () => (
  <SideBar>
    <Row between='xs' style={{ padding: '20px 40px', minHeight: '85px', margin: 0, borderBottom: '1px solid rgba(214,214,214,0.4)'}}>
      <Col>
        <small style={{color: '#1A3869'}}>Скоро</small><br/>
        <small>Демо-доступ</small>
      </Col>
      <Col>
        <Button outline>Вход</Button>
      </Col>
    </Row>
    <Row style={{ padding: '20px 40px', flex: '1 0 auto', justifyContent: 'start',
    flexDirection: 'column', textAlign: 'center' }}>
      <List />
      <div style = {{ flex: '1 0 auto',  flexDirection: 'column', textAlign: 'center',  display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '16px'}}>Оставьте заявку и вам забронируют счет</p>
        <Button wide submit>Бесплатно открыть счет</Button>
        <small>Откроем счет за 4 минуты</small>
      </div>
    </Row>
  </SideBar>
);
