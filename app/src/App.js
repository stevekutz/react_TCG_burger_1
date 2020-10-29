import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import classes from './app.module.css';

class App extends Component {

    render() {
        return (
            <div className = {classes.App}>
                <Layout>
                    <p> Something</p>
                </Layout>
            
            </div>
        )
    }




}

export default App;
