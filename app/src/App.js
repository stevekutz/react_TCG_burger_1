import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import classes from './app.module.css';

class App extends Component {

    render() {
        return (
            <div className = {classes.App}>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            
            </div>
        )
    }




}

export default App;
