import React from 'react';
import Container, { P, Column, H3, Link } from './styled';
import Appear from '../Appear';
import Card from './Card';

export default () => (
  <Container id="bank_1">
    <Column xs={12} md={6}>
      <P id="card_1">
        <H3>Реквизиты сразу</H3>
        <p>Заполните анкету и&nbsp;принимайте&nbsp;платежи</p>
      </P>
      <P id="card_2">
        <H3>Поможем открыть ИП или <span style={{whiteSpace: 'nowrap'}}>ООО</span></H3>
        <p>Готовые документы за&nbsp;15&nbsp;минут</p>
        <p>Онлайн подача в&nbsp;налоговую</p>
        <Link tel href='https://sfera.ru/start/'>
          Зарегистрировать юр. лицо&nbsp;&nbsp;&nbsp;
          <img alt='' src='images/arrow.svg' width="18" height="13" />
        </Link>
      </P>
      <P id="card_4">
        <H3>Вывод денег для&nbsp;ИП на&nbsp;личные карты в&nbsp;БКС&nbsp;Банке бесплатно</H3>
        <p>До&nbsp;150&nbsp;тыс&nbsp;₽ в&nbsp;месяц в&nbsp;тарифе&nbsp;S<br />и&nbsp;до 500&nbsp;тыс&nbsp;₽ в&nbsp;месяц&nbsp;тарифе&nbsp;L</p>
      </P>
    </Column>
    <Column xs={12} md={6}>
      <P id="bank_2">
        <H3>Карта для&nbsp;бизнеса</H3>
        <p>Управление лимитами, смс-информирование и&nbsp;бесплатный&nbsp;выпуск</p>
      </P>
      <Appear className='card'>
        <Card />
      </Appear>
    </Column>
  </Container>
);
