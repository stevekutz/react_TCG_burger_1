import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


import classes from './sidedrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }


    return (
        <Aux>
            <Backdrop  show = {props.open} clicked = {props.closed}   />
            <div className = {attachedClasses.join(' ')}>
                {/* <Logo height = '11%' /> */}  {/* one way to handle size for media queries */}
                
                {/* alternative is to wrap Lgo in div and use CSS modules to handle attributes since each >Logo gets hashed into own unique class */}
                
                <div className = {classes.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            
            </div>
        
        
        
        </Aux>


    
    )

}

export default sideDrawer;