import React from 'react';
/* import InputMask from 'react-input-mask'; */
/* import Checkbox from 'rc-checkbox'; */
import { Row , Col } from 'react-flexbox-grid';
import Button from './../Button';
/* import List from './List'; */

import SideBar, { ChatButton } from './styled';

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
            <a href="https://sfera.ru/login" target="_self">
              <Button id="enter" outline>Вход</Button>
            </a>
          </Col>
        </Row>
        <Row style={{ padding: '20px 40px', flex: '1 0 auto', justifyContent: 'start',
        flexDirection: 'column', textAlign: 'center' }}>
          {/* <List /> */}
          <div style = {{ flex: '1 0 auto',  flexDirection: 'column', textAlign: 'center',  display: 'flex', justifyContent: 'space-around' }}>
            {/* <InputMask
              mask="+7(999)999-99-99"
              placeholder="+7(___)___-__-__"
              maskChar="_"
              style = {{ margin: '30px 0', border: 'none', textAlign: 'center', outline: 'none', font: '20px GraphikLC Regular', color: 'rgb(5, 63, 122)'}}
            /> */}
            <div style={{flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p style={{ fontSize: '20px', lineHeight: '1.4'}}>Оставьте заявку и вам забронируют счет</p>
              <a href="https://sfera.ru/registration" target="_self">
                <Button id="open" disabled={this.state.disabled} wide submit>
                  Бесплатно открыть счет
                </Button>
              </a>
            </div>
            <ChatButton
              onClick={() => window.ThreadsWidget.showChat()}
              opaque
            >
              <svg style={{verticalAlign: 'middle', marginRight: '10px'}} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Landing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Landing_1_value_adding_v2" transform="translate(-1162.000000, -821.000000)" fill="#3F86F9">
                        <path d="M1181,825 L1179,825 L1179,833.999999 L1166,833.999999 L1166,835.999999 C1166,836.549998 1166.45,836.999999 1167,836.999999 L1178,836.999999 L1182,840.999999 L1182,826 C1182,825.45 1181.55,825 1181,825 Z M1177,830.999999 L1177,822 C1177,821.45 1176.55,821 1176,821 L1163,821 C1162.45,821 1162,821.45 1162,822 L1162,835.999999 L1166,831.999999 L1176,831.999999 C1176.55,831.999999 1177,831.549999 1177,830.999999 Z" id="Fill-2-Copy"></path>
                    </g>
                </g>
              </svg> Задать вопрос
            </ChatButton>
          </div>
        </Row>
      </SideBar>
    );
  }
}
