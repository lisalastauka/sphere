import React from 'react';
import HeaderContainer from './styled';
import ChangeText from '../ChangeText';

const texts = ["предпринимателю", "фрилансеру", "владельцу кафе", "владельцу автосервиса", "владельцу кафе"];

export default class Header extends React.Component {
  render () {
    return (
      <HeaderContainer>
        <h1>
          Умный банк, который помогает{' '}
          <span className='animate-flicker'>
            <ChangeText texts={texts} />
          </span>
        </h1>
        <p>
          Счет, создание и&nbsp;обмен электронными документами, расчет налогов, зарплаты и&nbsp;отчетность в&nbsp;одном окне
        </p>
      </HeaderContainer>
    );
  }
}
