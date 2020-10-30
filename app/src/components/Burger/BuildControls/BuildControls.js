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
        {controls.map((control) => (
            <BuildControl 
                key = {control.label} 
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}    
            />
            ))}
        
        
        </div>
    )


}

export default buildControls;