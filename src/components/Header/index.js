import React from 'react';
import HeaderContainer, { P } from './styled';
import ChangeText from '../ChangeText';

const texts = ["владельца бизнеса", "фрилансера", "оптовика", "малого бизнеса", "интернет-магазина", "салона красоты", "предпринимателя", "аптеки", "владельца кафе" ];

export default class Header extends React.Component {
  render () {
    return (
      <HeaderContainer>
        <h1>
          Умный банк для <br />
          <ChangeText
            texts={texts}
            animation='change'
          />
        </h1>
        <P className='mobileHide'>
          Бухгалтерия, финансовая аналитика<br /> и&nbsp;делопроизводство&nbsp;в&nbsp;одном&nbsp;окне.
        </P>
      </HeaderContainer>
    );
  }
}
