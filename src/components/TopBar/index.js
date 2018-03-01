import React from 'react';
import { Row } from 'react-flexbox-grid';
import Link from './../Link';
import { Logo } from './../Logo';

export default () => (
  <Row between='xs'>
    <Logo />
    <Link style={{marginRight: '60px'}} small href='tel:88005000305'>8 800 500 03 05</Link>
  </Row>
);
