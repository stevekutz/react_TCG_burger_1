import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {

return (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked = {props.drawerToggleClicked} />
        {/*  <Logo height = '80%'/> */}  {/* One way to handle size form eida queries */}
        
        {/*  other approach is to wrap Logo in a div */}

        <div className = {classes.Logo}>
            <Logo />
        </div>
        
        
        <nav className = {classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    
    
    </header>

)

}

export default toolbar;