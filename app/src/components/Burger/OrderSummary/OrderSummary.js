import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button';

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
            <Button 
                btnType = "Danger"
                clicked = {props.checkoutCancelled}
            > CANCEL  </Button>
            <Button
            
                btnType = "Success"
                clicked = {props.checkoutContinue}
            >  CONTINUE </Button>
        </Aux>
    
    
    )


}

export default orderSummary;