import React from 'react';
import Appear from '../Appear';

export default () => (
  <div id="account">
    <h2>Счета всех банков в одном окне</h2>
    <p style={{ marginBottom: '40px' }}>
      Добавляйте счета других банков чтобы видеть весь бизнес целиком.
    </p>
    <div style={{position: 'relative'}}>
      <img alt='' src='images/window.png' style={{ width: '800px', margin: '30px 0 80px -35px'}}/>
      <div style={{position: 'absolute', top: 0}}>
        <Appear className='account'>
          <img alt='' src='images/account.png'/>
        </Appear>
      </div>
    </div>
  </div>
);
