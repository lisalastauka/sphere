import React from 'react';
import Appear from '../Appear';
import Container, { Account, Zoom, ZoomMobile } from './styled';

export default () => (
  <Container id="account">
    <h2>Счета всех банков в&nbsp;одном <span style={{whiteSpace: 'nowrap'}}>окне</span></h2>
    <p>
      Добавляйте счета из&nbsp;других банков, чтобы видеть весь бизнес целиком и&nbsp;аналитику в&nbsp;разрезе контрагентов, категорий платежей и&nbsp;денежного&nbsp;потока.
    </p>
    <Account>
      <img alt='' data-src='images/window2x.png' data-srcset='images/window1x.png 1x, images/window2x.png 2x, images/window3x.png 3x'/>
      <ZoomMobile>
        <img alt='' data-src='images/account2x.png' data-srcset='images/account1x.png 1x, images/account2x.png 2x, images/account3x.png 3x'/>
      </ZoomMobile>
      <Zoom>
        <Appear className='account'>
          <img alt='' data-src='images/account2x.png' data-srcset='images/account1x.png 1x, images/account2x.png 2x, images/account3x.png 3x'/>
        </Appear>
      </Zoom>
    </Account>
  </Container>
);
