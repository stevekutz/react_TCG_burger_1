import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

import classes from './sidedrawer.module.css';

const sideDrawer = (props) => {

    return (
        <div className = {classes.SideDrawer}>
            {/* <Logo height = '11%' /> */}  {/* one way to handle size for media queries */}
            
            {/* alternative is to wrap Lgo in div and use CSS modules to handle attributes since each >Logo gets hashed into own unique class */}
            
            <div className = {classes.Logo} >
                <Logo />
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        
        </div>

    
    )

}

export default sideDrawer;