import React from 'react';
import HeaderContainer from './styled';
import ChangeText from '../ChangeText';

const texts = ["предпринимателя", "фрилансера", "владельца кафе", "владельца автосервиса"];

export default class Header extends React.Component {
  render () {
    return (
      <HeaderContainer>
        <h1>
          Умный банк для <br />
          <span><ChangeText texts={texts} /></span>
        </h1>
        <p>
          Электронные помощники, добавление счетов других банков, бухгалтерия в&nbsp;одном&nbsp;окне
        </p>
      </HeaderContainer>
    );
  }
}
