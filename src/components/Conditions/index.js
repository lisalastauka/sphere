import React from 'react';
import Conditions from './styled';

export default () => (
  <Conditions id="conditions">
    <h2>Выгодные условия обслуживания</h2>
    <h3>Бесплатно на всех тарифах:</h3>
    <ul>
      <li>Открытие и обслуживание расчетного&nbsp;счета</li>
      <li>Внутренние переводы на&nbsp;счета юридических лиц и <span style={{ letterSpacing: '2px' }}>ИП</span></li>
      <li>Выпуск карты при&nbsp;открытии счета</li>
      <li>Смс-информирование по&nbsp;карте</li>
      <li>Внесение наличных через&nbsp;кассу и&nbsp;банкомат БКС Банк</li>
    </ul>
  </Conditions>
);
