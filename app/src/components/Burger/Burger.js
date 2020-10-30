import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


import classes from './burger.module.css';


const burger = (props) => {

    // create array from ingredients obj passed in from state

    let builtIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            // in case there are multiple same ingredients, e.g. 2 meat, array will account for both
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key = {ingredientKey + i} type = {ingredientKey} />
            });  
        });

    console.log(' built array >> ', builtIngredients);

    let sum = 0;
    // basic way to count internal ingredient(aside form bun)
    for(let i = 0; i < builtIngredients.length; i++){
        sum += builtIngredients[i].length
    }

    // using reduce to count internal ingredients
    let sum_ingred = builtIngredients.reduce((acc, cur, i ) => acc + builtIngredients[i].length, 0)

    // flatten the builtIngredients array
    let flat_ingred_arr = [].concat(...builtIngredients)
    


    console.log('length', builtIngredients[0].length);
    console.log('sum >> ', sum);
    console.log('sum ingred', sum_ingred);
    console.log('flat_ingred_arr', flat_ingred_arr.length)

    // If burger not built, {builtIngredients returns JSX with message}

    if (flat_ingred_arr.length === 0) {
        builtIngredients = <p> Please add some ingredients </p>
    }


    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type = 'bread-top'/>
            {builtIngredients}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    
    );



}

export default burger;


