import React from 'react';
import Aux from '../../../hoc/Aux'


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return  <li key = {igKey}> 
                        <span style = {{textTransform: 'capitalize'}}> {igKey} </span>
                        : {props.ingredients[igKey]}
                    </li>
        });

    return (
        <Aux>
            <h3> Order Summary</h3> 
            <p> You requested to following ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p> Total = ${props.price.toFixed(2)}</p> 
            <p> Continue to Checkout </p>
        </Aux>
    
    
    )


}

export default orderSummary;