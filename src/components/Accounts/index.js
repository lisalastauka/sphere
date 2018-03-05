import React from 'react';
import Appear from '../Appear';
import Container, { Account, Zoom } from './styled';

export default () => (
  <Container id="account">
    <h2>Счета всех банков в одном окне</h2>
    <p>
      Добавляйте счета из&nbsp;других банков, чтобы видеть весь бизнес целиком и&nbsp;аналитику в&nbsp;разрезе контрагентов, категорий платежей и&nbsp;денежного потока.
    </p>
    <Account>
      <img alt='' src='images/window.png' />
      <Zoom>
        <Appear className='account'>
          <img alt='' src='images/account.png'/>
        </Appear>
      </Zoom>
    </Account>
  </Container>
);
