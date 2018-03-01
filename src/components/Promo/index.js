import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import { BCS } from './../Logo';
import Link from '../Link';
import { Side, Block, Box } from './styled';

export default () => (
  <Row>
    <Col xs={6}>
      <Side>
        <p>
          Базовый <Link href='#'>тариф</Link>:
        </p>
        <h2>
          Бесплатно
        </h2>
      </Side>
      <p>
        При поддержке <BCS />
      </p>
      <Box>
        <Block>
          <small>Банк работает</small>
          <h2>с 1995 <p style={{display: 'inline'}}>года</p></h2>
        </Block>
        <Block>
          <small>Рейтинг <Link href='#'>НРА</Link></small>
          <h2>A+</h2>
        </Block>
      </Box>
    </Col>
    <Col xs={6}>
      <img alt='' src='images/device.png' style={{width: '864px', marginLeft: '-40px', marginBottom: '20px'}}/>
    </Col>
  </Row>
);
