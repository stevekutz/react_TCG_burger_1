import React from 'react';

import classes from './buildcontrol.module.css';

const buildControl = (props) => {


    return (

            <div className = {classes.BuildControl}> 
                    <div className = {classes.Label}> {props.label}</div>
        
                    <button className = {classes.Less}>Less</button>
                    <button 
                        className = {classes.More}
                        onClick = {props.added}
                    >More</button>
    
            </div>
        
    
    )

}

export default buildControl;

/*
                    <button className = {cx(classes.BuildControlbutton, classes.BuildControlLess)}>Less</button>
                    <button className = {cx(classes.BuildControlbutton, classes.BuildControlMore)}>More</button>
*/                    