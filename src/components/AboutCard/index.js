import React from 'react';
import { AboutCard, Card, Column } from './styled';
import Appear from '../Appear';

export default () => (
  <AboutCard id="bank_1">
    <Column xs={12} md={6}>
      <Card id="card_1">
        <h3>Реквизиты сразу</h3>
        <p>Заполните анкету и принимайте платежи</p>
      </Card>
      <Card id="card_2">
        <h3>Откроем ИП или ООО</h3>
        <p>Подготовим документы за 1 день</p>
      </Card>
      <Card id="card_3">
        <h3>7% годовых на остаток по счету</h3>
        <p>Ваши деньги работают вместе с вами</p>
      </Card>
      <Card id="card_4">
        <h3>Вывод денег на счет бесплатно</h3>
        <p>До 150 тыс ₽ в месяц в тарифе S<br />и до 500 тыс ₽ в месяц тарифе L</p>
      </Card>
    </Column>
    <Column xs={12} md={6}>
      <Card id="bank_2">
        <h3>Карта для бизнеса</h3>
        <p>Управление лимитами, смс-информирование и бесплатный выпуск</p>
      </Card>
      <Appear className='card'>
        <img alt='' src='images/card.png'/>
      </Appear>
    </Column>
  </AboutCard>
);
