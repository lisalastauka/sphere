import React from 'react';
import cx from 'classnames';
import Container from './styled';

export default class ChangeText extends React.Component {
  state = {
    count: 0
  }

  changeText = () => {
    const { count } = this.state;
    const { texts } = this.props;
    this.setState({
      count: count < texts.length-1 ? count+1 : 0
    });
  }

  componentDidMount() {
    setInterval(this.changeText, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.changeText);
  }

  render() {
    const { texts, inline, animation } = this.props;
    return (
      <Container
        inline={inline}
        className={
          cx({
            [`${animation}`]: animation
          })
        }
      >
        <ul className='changeText'>
          {texts.map((text, i) => (
            <li key={i}>
              {inline ? <h2>{text}</h2> : text}
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
