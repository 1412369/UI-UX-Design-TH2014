import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Test from './container/test'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
class routes extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Title"
                />
                <Switch>
                    <Route exact path="/" component={Test} />
                </Switch>
            </MuiThemeProvider>
        );
    }
}

export default routes;