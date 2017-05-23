import React, { Component } from 'react';
import './App.css';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import './assets/react-toolbox/theme.css';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

const MenuTest = () => (
    <IconMenu icon='more_vert' position='topRight' className='b-menu-btn' menuRipple>
        <MenuItem value='home' icon='home' caption='Main page' className='b-menu-btn__item' />
        <MenuItem value='instructions' icon='help' caption='Instructions' className='b-menu-btn__item' />
        <MenuItem value='about' icon='info' caption='About' className='b-menu-btn__item' />
    </IconMenu>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar title='АстроДрюша'>
              <MenuTest/>
          </AppBar>
          <Button label="Hello World!" raised primary />
      </div>
    );
  }
}

export default App;
