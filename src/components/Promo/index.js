import React from 'react';
import { Col } from 'react-flexbox-grid';
import { BCS } from './../Logo';
import Link from '../Link';
import Appear from '../Appear';
import Container, { Side, Block, Box, Phone, Laptop } from './styled';

const scrollTo = (selector) => {
  const elem = document.querySelector(`#${selector}`);
  window.scroll({ top: elem.offsetTop - 75 , left: window.scrollX, behavior: 'smooth' });
}

export default () => (
  <Container>
    <Col xs={6}>
      <Side>
        <p>
          Базовый <Link onClick={() => scrollTo('tarifs')}>тариф</Link>:
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
          <h2>с 1989 <b>года</b></h2>
          <small>Лицензия ЦБ РФ №101</small>
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
