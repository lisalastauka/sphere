import React from 'react';
import HeaderContainer from './styled';

const texts = ["предпринимателю", "фрилансеру", "владельцу бизнеса"];

export default class Header extends React.Component {
  state = {
    count: 0
  }

  changeText = () => {
    const { count } = this.state;
    this.setState({
      count: count < 2 ? count+1 : 0
    });
  }

  componentDidMount() {
    setInterval(this.changeText, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.changeText);
  }

  render () {
    const text = texts[this.state.count];
    return (
      <HeaderContainer>
        <h1>
          Умный банк, который помогает{' '}<b className='animate-flicker'>{text}</b>
        </h1>
        <p>
          Счет, создание и&nbsp;обмен электронными документами, расчет налогов, зарплаты и&nbsp;отчетность в&nbsp;одном окне
        </p>
      </HeaderContainer>
    );
  }
}
