import React, { Component } from 'react';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import './TopMenu.css';

class TopMenu extends Component {
    render() {
        return (
            <IconMenu icon='more_vert' position='topRight' className='b-top-menu' menuRipple>
                <MenuItem value='home' icon='home' caption='Main page' className='b-top-menu__item' />
                <MenuItem value='instructions' icon='help' caption='Instructions' className='b-top-menu__item' />
                <MenuItem value='about' icon='info' caption='About' className='b-top-menu__item' />
            </IconMenu>
        );
    }
}

export default TopMenu;