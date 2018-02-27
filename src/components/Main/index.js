import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import { Logo, BCS } from './../Logo';
import Link from './../Link';
import Button, { ButtonGroup } from './../Button';
import { Gradient, Colored, Side, Block, Box, H3, Carousell, Slide, Conditions, Size, Footer, Links } from './styled';

export default () => (
  <div>
    <Gradient />
    <Row around='xs' style={{ margin: '0 auto', maxWidth: '1280px', overflow: 'hidden'}}>
      {/* background: "url(images/device.png) center right -270px / 100% no-repeat" */}
      <Col xs={8} style={{ maxWidth: '860px' }}>
        <Row between='xs'>
          <Logo />
          <Link small href='tel:88005007065'>8 800 500 70 65</Link>
        </Row>
        <h1>
          Умный банк, который помогает <Colored>предпринимателю</Colored>
        </h1>
        <p styled={{ marginBottom: '20px' }}>
          Электронные помощники, добавление счетов других банков, <br/> бухгалтерия в одном окне
        </p>
        <Row>
          <Col xs={6}>
            <Side>
              <p>
                Базовый <Link href='#'>тариф</Link>:
              </p>
              <h2>Бесплатно</h2>
            </Side>
            <p>
              При поддержке <BCS />
            </p>
            <Box>
              <Block>
                <small>Банк работает</small>
                <h2>с 1995 <p style={{display: 'inline'}}>года</p></h2>
              </Block>
              <Block>
                <small>Рейтинг <Link href='#'>НРА</Link></small>
                <h2>A+</h2>
              </Block>
            </Box>
          </Col>
          <Col xs={6} style={{ position: 'relative' }}>
            <img src='images/device.png' style={{width: '864px', marginLeft: '-40px', marginBottom: '20px'}}/>
          </Col>
        </Row>
        <Row style={{ marginBottom: '156px' }}>
          <Col xs={6}>
            <div style={{ height: '85px', marginBottom: '25px' }}>
              <h3><Colored>Реквизиты сразу</Colored></h3>
              <p>Заполните анкету и принимайте платежи</p>
            </div>
            <div style={{ height: '85px', marginBottom: '25px' }}>
              <h3><Colored>Откроем ИП или ООО</Colored></h3>
              <p>Подготовим документы за 1 день</p>
            </div>
            <div style={{ height: '85px', marginBottom: '25px' }}>
              <h3><Colored>7% годовых на остаток по счету</Colored></h3>
              <p>Ваши деньги работают вместе с вами</p>
            </div>
            <div style={{ height: '85px', marginBottom: '25px' }}>
              <h3><Colored>Вывод денег на счет бесплатно</Colored></h3>
              <p>До 150 тыс ₽ в месяц в тарифе S<br />и до 500 тыс ₽ в месяц тарифе L</p>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ height: '85px', marginBottom: '25px' }}>
              <h3><Colored>Карта для бизнеса</Colored></h3>
              <p>Управление лимитами, смс-информирование<br /> и бесплатный выпуск</p>
            </div>
            <img src='images/card.png' style={{ width: '400px',     marginLeft: '-35px', marginTop: '-14px'}}/>
          </Col>
        </Row>
        <h2>Можно работать без <Colored>бухгалтера</Colored></h2>
        <p style={{ marginBottom: '40px' }}>
          Посчитаем налоги и отправим отчетность. Напомним когда <br/> нужно заплатить налоги и взносы, чтобы сэкономить.
        </p>
        <Carousell>
          <Slide backward ><h6>Пора готовить декларацию для налоговой</h6></Slide>
          <Slide center ><h5>Пора готовить декларацию для налоговой</h5></Slide>
          <Slide >
            <h5>Рекомендуем заплатить страховые взносы за I квартал</h5>
            <Row>
              <Col xs={8}>
                <small>
                  Оплатите страховые взносы до 31 марта 2018 года на сумму 8 096,25₽, чтобы уменьшить сумму авансового платежа за I квартал.
                </small>
              </Col>
              <Col xs={4}>
                <ButtonGroup>
                  <Button outline type="button">Оплатить</Button>
                  <Button outline small type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    &#8226; &#8226; &#8226;
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Slide>
        </Carousell>
        <h2>Счета всех банков в одном окне</h2>
        <p style={{ marginBottom: '40px' }}>
          Добавляйте счета других банков чтобы видеть весь бизнес целиком.
        </p>
        <img src='images/window.png' style={{ width: '800px',     marginLeft: '-35px', marginBottom: '80px'}}/>
        <Row>
          <h2>Создавайте и подписывайте документы онлайн</h2>
          <Col xs={7}>
            <p style={{ marginBottom: '40px' }}>
              Конструктор договоров, быстро соединит платеж <br />  с документом, а также вы сможете подписать его <br />   и проконтролировать сроки платежа.
            </p>
          </Col>
          <Col xs={5}>
            <img src='images/document.png' style={{ width: '295px', marginTop: '35px', marginBottom: '140px'}}/>
          </Col>
        </Row>


        <Conditions>
          <h2>Выгодные условия обслуживания</h2>
          <h3>Бесплатно для всех клиентов:</h3>
          <ul>
            <li>Перевод физ. лицу до 100 тыс. ₽ и до 1 млн ₽ на собственную карту</li>
            <li>Внесение наличных через кассу</li>
            <li>Выдача наличных до 50 тыс. ₽ в банкоматах БКС и Росбанка и с комиссией 1% в кассе отделений.</li>
            <li>Валютные платежи от 0,1%</li>
          </ul>
        </Conditions>
        <Row>
          <Col xs={4}>
            <Size>
              <img src={'images/S.svg'}/>
              <ul>
                <li> <b>90₽ за перевод</b> юр. лицам</li>
                <li> <b>1%</b> за внесение наличных через банкомат </li>
              </ul>
              <div>
                <h3>
                  Бесплатно
                </h3>
              </div>
              <Button outline wide>
                Выбрать тариф
              </Button>
            </Size>
          </Col>
          <Col xs={4}>
            <Size>
              <img src={'images/M.svg'}/>
              <ul>
                <li> <b>5 платежей бесплатно,</b> остальные 40₽ за перевод  юр. лицам</li>
                <li> <b>0,5% за внесение</b> наличных через банкомат </li>
              </ul>
              <div>
                <h3>
                  599₽ / месяц
                </h3>
                <small>449₽ (при оплате за год)</small>
              </div>
              <Button outline wide>
                Выбрать тариф
              </Button>
            </Size>
          </Col>
          <Col xs={4}>
            <Size>
              <img src={'images/L.svg'}/>
              <ul>
                <li> <b>15 платежей бесплатно,</b> остальные 30₽ за перевод  юр. лицам</li>
                <li> <b>Бесплатное внесение</b> наличных через банкомат</li>
              </ul>
              <div>
                <h3>
                  899₽ / месяц
                </h3>
                <small>674₽ (при оплате за год)</small>
              </div>
              <Button outline wide>
                Выбрать тариф
              </Button>
            </Size>
          </Col>
          <Link href='#' >Подробное описание тарифов</Link>
        </Row>
      </Col>
      <Col
        xs={4}
        style={{ maxWidth: '400px' }}
      >
      </Col>
    </Row>
    <Footer>
      <Row around='xs' style={{ margin: '0 auto', maxWidth: '1280px'}}>
        <Col
          xs={8}
          style={{ maxWidth: '860px' }}
        >
          <Row>
            <Col xs>
              <h3>Ответим на ваши вопросы</h3>
            </Col>
            <Col xs style={{textAlign: 'right', marginBottom: '50px'}}>
              <small>Или позвоните по бесплатному номеру</small>
              <br />
              <Link href='tel:88005007065'>8 800 500 70 65</Link>
            </Col>
            <img src='images/chat.png' style={{width: '860px', height: '220px', marginBottom: '50px'}} />
          </Row>
          <Links>
            <Row>
              <Col xs={4}>
                <Link href='#'>Смотреть тарифы</Link>
                <Link href='#'>Отделения банка</Link>
              </Col>
              <Col xs={4}>
                <Link href='#'>Документы</Link>
                <Link href='#'>Банковская лицензия</Link>
              </Col>
            </Row>
          </Links>
          <div style={{ margin: '60px 0'}}>
            <Button opaque>
              Доступно в<br /> <b> любом браузере</b>
            </Button>
            <Button opaque>
              <Row>
                <Col xs={0}>
                  <br />
                </Col>
                <Col xs={3}>
                  <img src='images/gplay.svg' />
                </Col>
                <Col xs={9}>
                  Скачайте в<br /> <b>Google play</b>
                </Col>
              </Row>
            </Button>
            <Button opaque>
              <Row>
                <Col xs={0}>
                  <br />
                </Col>
                <Col xs={3}>
                  <img src='images/appstore.svg' />
                </Col>
                <Col xs={9}>
                  Скачайте в<br /> <b>App Store</b>
                </Col>
              </Row>
            </Button>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)'}}>
            Банковские услуги предоставляются Акционерным обществом «БКС — Инвестиционный Банк», Генеральная лицензия ЦБ РФ № 101 от 15.12.2014 г. Выдана без ограничения срока действия. Официальный сайт http://www.bcs-bank.com. Услуги по размещению денежных средств во вклады предоставляются Акционерным общество «БКС — Инвестиционный Банк», а также иными кредитными организациями - партнерами Акционерного общества «БКС — Инвестиционный Банк».
          </p>
        </Col>
        <Col xs={4} style={{ maxWidth: '400px' }} />
      </Row>
    </Footer>
  </div>
);
