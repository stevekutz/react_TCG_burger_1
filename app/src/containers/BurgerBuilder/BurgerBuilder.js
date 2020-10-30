import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,

}

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            lettuce: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
            
            },
        totalPrice: 4,  

    
    }

    handler_addIngredient  = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

    }


    handler_removeIngredient = (type) => {
    
    
    }


    render() {
    
    
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/> 
                <BuildControls 
                    ingredientAdded = {this.handler_addIngredient}
                />
            
            
            </Aux>
        )
    
    }

}

export default BurgerBuilder;