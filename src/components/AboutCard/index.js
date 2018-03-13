import React from 'react';
import Container, { P, Column } from './styled';
import Appear from '../Appear';
import Card from './Card';

export default () => (
  <Container id="bank_1">
    <Column xs={12} md={6}>
      <P id="card_1">
        <h3>Реквизиты сразу</h3>
        <p>Заполните анкету и принимайте платежи</p>
      </P>
      <P id="card_2">
        <h3>Откроем ИП или ООО</h3>
        <p>Подготовим документы и&nbsp;отправим в&nbsp;налоговую за&nbsp;1&nbsp;день</p>
      </P>
      <P id="card_4">
        <h3>Вывод денег на&nbsp;личные карты в&nbsp;БКС&nbsp;Банке бесплатно</h3>
        <p>До 150 тыс ₽ в месяц в тарифе S<br />и до 500 тыс ₽ в месяц тарифе L</p>
      </P>
    </Column>
    <Column xs={12} md={6}>
      <P id="bank_2">
        <h3>Карта для бизнеса</h3>
        <p>Управление лимитами, смс-информирование и бесплатный выпуск</p>
      </P>
      <Appear className='card'>
        <Card />
      </Appear>
    </Column>
  </Container>
);
