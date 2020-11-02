import React from 'react';
import classes from './button.module.css';


const button = (props) => {
    
    return (
        <button
            className = {[classes.Button, classes.Border, classes[props.btnType]].join(' ')}
            onClick = {props.clicked}

        > {props.children}
        </button>    
    )


}

export default button;