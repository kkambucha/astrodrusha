import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import TopMenu from '../TopMenu';
import Horoscope from '../Horoscope';
import '../../assets/react-toolbox/theme.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar title='АстроДрюша'>
              <TopMenu/>
          </AppBar>
          <Horoscope/>
          <Button label="Hello World!" raised primary />
      </div>
    );
  }
}

export default App;
