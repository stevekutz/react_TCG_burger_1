import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
        checkout: false, 

    
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
        this.handler_updateCheckout(updatedIngredients);

    }


    handler_removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.handler_updateCheckout(updatedIngredients);
    }

    handler_updateCheckout = (ingredients) => {
        // const ingredients_copy = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(ingred_key => ingredients[ingred_key])
            .reduce((acc, cur) => acc + cur, 0)
    
        this.setState({checkout: sum > 0});
    }


    render() {
    
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    
        return (
            <Aux>
                <Modal>
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        price = {this.state.totalPrice}
                        />
                </Modal>
                <Burger ingredients = {this.state.ingredients}/> 
                <BuildControls 
                    ingredientAdded = {this.handler_addIngredient}
                    ingredientRemoved = {this.handler_removeIngredient}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    checkout = {this.state.checkout}
                />
            
            
            </Aux>
        )
    
    }

}

export default BurgerBuilder;