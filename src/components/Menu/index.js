import React from 'react';
import Button from '../Button';
import Link from '../Link';
import Container, { GoTo } from './styled';


export default class Menu extends React.Component {
  scrollTo(selector) {
    const elem = document.querySelector(`#${selector}`);
    window.scroll({ top: elem.offsetTop - 75 , left: window.scrollX, behavior: 'smooth' });
    return this.props.toggle();
  }

  render(){
    const { open } = this.props;
    return (
      <Container open={open}>
        <GoTo onClick={() => this.scrollTo('bank_1')}>Преимущества</GoTo>
        <GoTo onClick={() => this.scrollTo('conditions')}>Условия</GoTo>
        <GoTo onClick={() => this.scrollTo('tarifs')}>Тарифы</GoTo>
        <div style={{margin: '40px 0'}}>
          <small>Или позвонить по телефону</small>
          <br />
          <Link tel href='tel:88005000305'>8 800 500 03 05</Link>
        </div>
        <a href="https://sme.bcs-bank.com/login" target="_self">
          <Button outline>Вход для пользователей</Button><br/>
        </a>
        <small>Скоро <span style={{opacity: '0.4'}}>{'  '} Демо-доступ</span></small>
      </Container>
    );
  }
}
