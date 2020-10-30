import React from 'react';

import classes from './buildcontrol.module.css';

const buildControl = (props) => {


    return (
        <div>
            <div className = {classes.BuildControl}> {props.label}</div>
            <button className = {classes.BuildControlbutton , classes.BuildControlLess}>Less</button>
            <button className = {classes.BuildControlbutton , classes.BuildControlMore}>More</button>
        </div>
    
    )

}

export default buildControl;