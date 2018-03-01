import React from 'react';
import { Row } from 'react-flexbox-grid';
import Link from './../Link';
import { Logo } from './../Logo';

export default () => (
  <Row between='xs'>
    <Logo />
    <Link small href='tel:88005007065'>8 800 500 70 65</Link>
  </Row>
);
