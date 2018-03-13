import React from 'react';

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
    const text = this.props.texts[this.state.count];
    return text;
  }
}
