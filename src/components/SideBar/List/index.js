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

  render () {
    return (
      <Container>
        <Appear trigger='bank_1' className='bank'>
          <small style={{ fontSize: '16px',  textAlign: 'left'}}>
            Вы получаете:
          </small>
        </Appear>
        <ul style={{ textAlign: 'left'}}>
          <Appear trigger='bank_2' className='bank'>
            <li>Надежный банк</li>
          </Appear>
          <Appear trigger='card_1' className='bank'>
            <li>Реквизиты сразу</li>
          </Appear>
          <Appear trigger='card_2' className='bank'>
            <li>Карта для бизнеса</li>
          </Appear>
          <Appear trigger='card_3' className='bank'>
            <li>7% годовых на остаток</li>
          </Appear>
          <Appear trigger='card_4' className='bank'>
            <li>Большие лимиты на вывод</li>
          </Appear>
          <Appear trigger='slides' className='bank'>
            <li>Посчитаем налоги</li>
          </Appear>
          <Appear trigger='account' className='bank'>
            <li>Объединение счетов</li>
          </Appear>
          <Appear trigger='document' className='bank'>
            <li>Создание документов</li>
          </Appear>
          <Appear trigger='tarifs' className='bank'>
            <li>Выгодные тарифы</li>
          </Appear>
        </ul>
      </Container>

    );
  }

}
