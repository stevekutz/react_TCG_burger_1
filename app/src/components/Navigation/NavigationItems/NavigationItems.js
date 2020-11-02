import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './navigationitems.module.css';

const navigationItems = (props) => {

    return  (
        <ul className = {classes.NavigationItems}>
            <NavigationItem
                link = '/'
                active // this is a boolean. Could have also done like   active = {true}
            > BurgerBuilder
            
            </NavigationItem>

            <NavigationItem
                link = '/'
            
            > Checkout
            </NavigationItem>
        
        </ul>
    
    )


}

export default navigationItems;