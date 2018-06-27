import React from 'react';
import { Col } from 'react-flexbox-grid';
import { BCS } from './../Logo';
import Link from '../Link';
import Appear from '../Appear';
import Container, { Side, Block, Box, Phone, Laptop, MediaBlock } from './styled';

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
    <MediaBlock xs={6}>
      <Laptop>
        <Appear className='promo'>
          <img alt='' data-src='images/laptop2x.png' data-srcset='images/laptop2x.png 2x, images/laptop3x.png 3x'/>
        </Appear>
      </Laptop>
      <Phone>
        <Appear className='phone'>
          <img alt='' data-src='images/phone2x.png' data-srcset='images/phone2x.png 2x, images/phone3x.png 3x'/>
        </Appear>
      </Phone>
    </MediaBlock>
  </Container>
);
