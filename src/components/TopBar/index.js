import React from 'react';
import Link from './../Link';
import { Logo } from './../Logo';
import Call from './styled';

export default () => (
  <div>
    <Logo />
    <Call>
      <small>Бесплатно по России</small><br/>
      <Link small href='tel:88005000305'>8 800 500 03 05</Link>
    </Call>
  </div>
);
