import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './logo.module.css';


const logo = (props) => {

    return (
        <div className = {classes.Logo}>
            <img src = {burgerLogo} alt = 'burger logo'/>
        
        </div>
    
    )

}

export default logo;