import React from 'react';
import { Col } from 'react-flexbox-grid';
import { BCS } from './../Logo';
import Link from '../Link';
import Appear from '../Appear';
import Container, { Side, Block, Box, Phone, Laptop } from './styled';

export default () => (
  <Container>
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
          <h2>с 1989 <p style={{display: 'inline'}}>года</p></h2>
        </Block>
        <Block>
          <small>Эксперт <Link href='#'>РА</Link></small>
          <h2>ruBBB+</h2>
        </Block>
      </Box>
    </Col>
    <Col xs={6}>
      <Laptop>
        <Appear className='promo'>
          <img alt='' src='images/laptop.png'/>
        </Appear>
      </Laptop>
      <Phone>
        <Appear className='phone'>
          <img alt='' src='images/phone.png'/>
        </Appear>
      </Phone>
    </Col>
  </Container>
);
