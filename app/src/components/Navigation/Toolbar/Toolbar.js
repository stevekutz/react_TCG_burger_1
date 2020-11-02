import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => {

return (
    <header className = {classes.Toolbar}>
        <div> Menu </div>
        {/*  <Logo height = '80%'/> */}  {/* One way to handle size form eida queries */}
        
        {/*  other approach is to wrap Logo in a div */}

        <div className = {classes.Logo}>
            <Logo />
        </div>
        
        
        <nav>
            <NavigationItems/>
        </nav>
    
    
    </header>

)

}

export default toolbar;