import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './buildcontrols.module.css';


// an array of controls
const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},


]

const buildControls = (props) => {

    return (
        <div className = {classes.BuildControls}>
        <p className = {classes.Price}> Current Price: ${props.price.toFixed(2)}</p>

        {controls.map((control) => (
            <BuildControl 
                key = {control.label} 
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}
                removed = {() => props.ingredientRemoved(control.type)} 
                disabled = {props.disabled[control.type]}  
            />
            ))}
            <button 
                className = {classes.OrderButton}
                disabled = {!props.checkout}
            > ORDER NOW </button>
        
        </div>
    )


}

export default buildControls;