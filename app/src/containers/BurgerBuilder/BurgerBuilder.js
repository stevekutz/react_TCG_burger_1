import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

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
        checkingOut: false,
        loading: false,

    
    }

    // componentDidMount () {
    //     axios.get('https://react-burger-b1810.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             this.setState({ ingredients: response.data})    
    //         })
    //         .catch(error => {
    //             this.setState({ error: true })
    //         })
    // }


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

    handler_checkingOut = () => {
    
        this.setState({checkingOut: true})
    }

    handler_cancelCheckingOut = () => {
        this.setState({checkingOut: false})
    
    }

    // add POST request to Firebase endpoint here from state of order
    handler_checkoutContinue = () => {
        //alert(' Continue Checkout ')

        // set state for Spinner
        this.setState({loading: true})


        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),  // in reality you would calculate this on backend
            customer: {
                name: ' Test User',
                address: {
                    street: '1234 SomeStreet',            
                    zipCode: '99999',
                    country: 'USA',
                },
                email: 'some_email@email.com',
            
            },
            deliveryMethod: 'fastest',
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, checkingOut: false})
            })
            .catch(error => {
                this.setState({loading: false, checkingOut: false})
            })
    }


    render() {
    
        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
    
        let orderSummary =   <OrderSummary 
                                ingredients = {this.state.ingredients}
                                price = {this.state.totalPrice}
                                checkoutCancelled = {this.handler_cancelCheckingOut}
                                checkoutContinue = {this.handler_checkoutContinue}

                            />

        if (this.state.loading) {
            orderSummary = <Spinner />
        
        }

        return (
            <Aux>
                <Modal
                    show = {this.state.checkingOut}
                    modalClosed = {this.handler_cancelCheckingOut}     
                >

                    {orderSummary}

                </Modal>
                <Burger ingredients = {this.state.ingredients}/> 
                <BuildControls 
                    ingredientAdded = {this.handler_addIngredient}
                    ingredientRemoved = {this.handler_removeIngredient}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    checkout = {this.state.checkout}
                    ordered = {this.handler_checkingOut}
                />
            
            </Aux>
        )
    
    }

}

export default withErrorHandler( BurgerBuilder, axios );