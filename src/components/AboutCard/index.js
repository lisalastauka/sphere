import React from 'react';
import { Col } from 'react-flexbox-grid';
import Colored from './../Colored';
import { AboutCard, Card } from './styled';

export default () => (
  <AboutCard style={{ marginBottom: '156px' }}>
    <Col xs={12} md={6}>
      <Card>
        <h3><Colored>Реквизиты сразу</Colored></h3>
        <p>Заполните анкету и принимайте платежи</p>
      </Card>
      <Card>
        <h3><Colored>Откроем ИП или ООО</Colored></h3>
        <p>Подготовим документы за 1 день</p>
      </Card>
      <Card>
        <h3><Colored>7% годовых на остаток по счету</Colored></h3>
        <p>Ваши деньги работают вместе с вами</p>
      </Card>
      <Card>
        <h3><Colored>Вывод денег на счет бесплатно</Colored></h3>
        <p>До 150 тыс ₽ в месяц в тарифе S<br />и до 500 тыс ₽ в месяц тарифе L</p>
      </Card>
    </Col>
    <Col xs={12} md={6}>
      <Card>
        <h3><Colored>Карта для бизнеса</Colored></h3>
        <p>Управление лимитами, смс-информирование<br /> и бесплатный выпуск</p>
      </Card>
      <img alt='' src='images/card.png'/>
    </Col>
  </AboutCard>
);
