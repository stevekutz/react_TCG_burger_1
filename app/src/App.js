import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import classes from './app.module.css';

class App extends Component {

    // state = {
    //     show: true,
    // }


    // componentDidMount () {
    //     setTimeout( () => {
    //         this.setState({show: false})
    //     }, 5000)
    
    // }


    render() {
        return (
            <div className = {classes.App}>
                <Layout>
                     {/* { this.state.show ? <BurgerBuilder/> : null}  */ }
                     <BurgerBuilder />
                </Layout>
            
            </div>
        )
    }




}

export default App;
