import React from 'react';
import Colored from '../Colored';
import Carousel from './../Carousel';

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
      <div style={{ marginBottom: '20px' }}>
        <h1>
          Умный банк, который помогает{' '}<span className='animate-flicker'><Colored>{text}</Colored></span>
        </h1>
        <p>
          Электронные помощники, добавление счетов других банков, <br/> бухгалтерия в одном окне
        </p>
      </div>
    );
  }
}
