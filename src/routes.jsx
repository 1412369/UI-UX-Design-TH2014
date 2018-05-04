import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Test from './container/test'
class routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Test}/>
            </Switch>
        );
    }
}

export default routes;