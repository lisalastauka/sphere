import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import StyleConfig from './styled-components/theme';
import Main from './components/Main';
import './App.css';

class App extends Component {
  // state = {
  //   loaded: false
  // }
  // componentDidMount(){
  //   window.onload = () => {
  //     return this.setState({loaded : true});
  //   };
  // }

  render() {
    return (
      <ThemeProvider theme={StyleConfig}>
        <Main />
      </ThemeProvider>
    );
  }
}

export default App;
