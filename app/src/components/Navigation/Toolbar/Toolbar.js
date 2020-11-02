import React from 'react';
import classes from './toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {

return (
    <header className = {classes.Toolbar}>
        <div> Menu </div>
        <Logo />
        <nav>
            LIST
        </nav>
    
    
    </header>

)

}

export default toolbar;