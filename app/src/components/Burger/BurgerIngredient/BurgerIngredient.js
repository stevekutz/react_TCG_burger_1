import React from 'react';
import classes from './burgeringredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;


    switch(props.type) {
        case('bread-bottom'):
            ingredient = <div className = {classes.BreadBottom}></div>
    
    }



}

export default burgerIngredient;