import React from 'react';
/* import InputMask from 'react-input-mask'; */
/* import Checkbox from 'rc-checkbox'; */
import { Row , Col } from 'react-flexbox-grid';
import Button from './../Button';
import List from './List';

import SideBar from './styled';

import 'rc-checkbox/assets/index.css';


export default class Container extends React.Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    this.setState((state) => ({
      disabled: !state.disabled,
    }));
  }

  render() {
    return (
      <SideBar>
        <Row between='xs' style={{ padding: '20px 40px', minHeight: '85px', margin: 0, borderBottom: '1px solid rgba(214,214,214,0.4)'}}>
          <Col>
            <small style={{color: '#1A3869'}}>Скоро</small><br/>
            <small>Демо-доступ</small>
          </Col>
          <Col>
            <a href="https://sme.bcs-bank.com/login" target="_self">
              <Button outline>Вход</Button>
            </a>
          </Col>
        </Row>
        <Row style={{ padding: '20px 40px', flex: '1 0 auto', justifyContent: 'start',
        flexDirection: 'column', textAlign: 'center' }}>
          <List />
          <div style = {{ flex: '1 0 auto',  flexDirection: 'column', textAlign: 'center',  display: 'flex', justifyContent: 'center' }}>
            <p style={{ fontSize: '20px', lineHeight: '1.4'}}>Оставьте заявку и вам забронируют счет</p>
            {/* <InputMask
              mask="+7(999)999-99-99"
              placeholder="+7(___)___-__-__"
              maskChar="_"
              style = {{ margin: '30px 0', border: 'none', textAlign: 'center', outline: 'none', font: '20px GraphikLC Regular', color: 'rgb(5, 63, 122)'}}
            /> */}
            <a href="https://sme.bcs-bank.com/registration" target="_self">
              <Button disabled={this.state.disabled} wide submit>Бесплатно открыть счет</Button>
            </a>
            {/* <div>
              <Checkbox
                defaultChecked
                onChange={this.toggle}
              />
              <label>
                &nbsp;Согласие на обработку <a>персональных данных</a>
              </label>
            </div> */}
          </div>
        </Row>
      </SideBar>
    );
  }
}
