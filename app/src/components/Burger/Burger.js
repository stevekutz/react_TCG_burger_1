import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


import classes from './burger.module.css';


const burger = (props) => {

    // create array from ingredients obj passed in from state

    const builtIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            // in case there are multiple same ingredients, e.g. 2 meat, array will account for both
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key = {ingredientKey + i} type = {ingredientKey} />
            });  
        });

    console.log(' built array >> ', builtIngredients)    ;

    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = 'bread-top'/>
            {builtIngredients}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    
    );



}

export default burger;


