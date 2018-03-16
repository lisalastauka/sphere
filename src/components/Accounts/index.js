import React from 'react';
import Appear from '../Appear';
import Container, { Account, Zoom, ZoomMobile } from './styled';

export default () => (
  <Container id="account">
    <h2>Счета всех банков в одном окне</h2>
    <p>
      Добавляйте счета из&nbsp;других банков, чтобы видеть весь бизнес целиком и&nbsp;аналитику в&nbsp;разрезе контрагентов, категорий платежей и&nbsp;денежного потока.
    </p>
    <Account>
      <img alt='' src='images/window2x.png' srcset='images/window1x.png 1x, images/window2x.png 2x, images/window3x.png 3x'/>
      <ZoomMobile>
        <img alt='' src='images/account2x.png' srcset='images/account1x.png 1x, images/account2x.png 2x, images/account3x.png 3x'/>
      </ZoomMobile>
      <Zoom>
        <Appear className='account'>
          <img alt='' src='images/account2x.png' srcset='images/account1x.png 1x, images/account2x.png 2x, images/account3x.png 3x'/>
        </Appear>
      </Zoom>
    </Account>
  </Container>
);
