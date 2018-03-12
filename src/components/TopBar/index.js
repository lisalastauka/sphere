import React from 'react';
import Link from './../Link';
import { Logo } from './../Logo';
import Container, { Call, Toggle, OpenClose } from './styled';

export default (props) => (
  <Container>
    <Logo />
    <Toggle onClick={props.toggle}>Меню<OpenClose open={props.open} /></Toggle>
    <Call>
      <small>Бесплатно по России</small><br/>
      <Link tel href='tel:88005000305'>8 800 500 03 05</Link>
    </Call>
  </Container>
);
