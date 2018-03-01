import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import { BCS } from './../Logo';
import Link from '../Link';
import Appear from '../Appear';
import { Side, Block, Box } from './styled';

export default () => (
  <Row style={{position: 'relative'}}>
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
      <Appear className='promo'>
        <img alt='' src='images/laptop.png'/>
      </Appear>
      <div style={{position: 'absolute', top: 0}}>
        <Appear className='phone'>
          <img alt='' src='images/phone.png'/>
        </Appear>
      </div>
    </Col>
  </Row>
);
