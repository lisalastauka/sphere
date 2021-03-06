import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import StyleConfig from './styled-components/theme';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={StyleConfig}>
        <Main />
      </ThemeProvider>
    );
  }
}

export default App;
