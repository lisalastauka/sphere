import React from 'react';
import Appear from '../../Appear';
import Container from './styled';

export default class List extends React.Component {
  constructor(){
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    scrollTop: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;

    this.setState({
      scrollTop
    });
  }

  scrollTo(selector) {
    const elem = document.querySelector(`#${selector}`);
    window.scroll({ top: elem.offsetTop - 75 , left: window.scrollX, behavior: 'auto' });
  }

  render () {
    return (
      <Container>
        <Appear trigger='bank_1' className='bank_1'>
          <small style={{ fontSize: '16px',  textAlign: 'left'}}>
            Вы получаете:
          </small>
          <ul style={{ textAlign: 'left'}}>
            <Appear trigger='bank_2' className='bank_2'>
              <li onClick={() => this.scrollTo('bank_2')}>Надежный банк</li>
            </Appear>
            <Appear trigger='card_1' className='card_1'>
              <li onClick={() => this.scrollTo('card_1')}>Реквизиты сразу</li>
            </Appear>
            <Appear trigger='card_2' className='card_2'>
              <li onClick={() => this.scrollTo('card_2')}>Карта для бизнеса</li>
            </Appear>
            <Appear trigger='card_4' className='card_4'>
              <li onClick={() => this.scrollTo('card_4')}>Большие лимиты на вывод</li>
            </Appear>
            <Appear trigger='slides' className='bank'>
              <li onClick={() => this.scrollTo('slides')}>Посчитаем налоги</li>
            </Appear>
            <Appear trigger='account' className='bank'>
              <li onClick={() => this.scrollTo('account')}>Объединение счетов</li>
            </Appear>
            <Appear trigger='document' className='bank'>
              <li onClick={() => this.scrollTo('document')}>Создание документов</li>
            </Appear>
            <Appear trigger='tarifs' className='bank'>
              <li onClick={() => this.scrollTo('tarifs')}>Выгодные тарифы</li>
            </Appear>
          </ul>
        </Appear>
      </Container>

    );
  }

}
