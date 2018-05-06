import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Test from './container/test'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './features/navigation';
import Welcome from './features/welcome';
import Home from './features/home'
import { fitTheme, GridContainer, GridHeader, GridContent } from './layout'
class routes extends Component {
    render() {
        return (
            <MuiThemeProvider
                muiTheme={fitTheme}
            >
                <GridContainer>
                    <GridHeader>
                        <NavBar />
                    </GridHeader>
                    <GridContent>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route exact path="/" component={Welcome} />
                            <Route path="*" render={() => <div>Not found</div>} />
                        </Switch>
                    </GridContent>
                </GridContainer>
            </MuiThemeProvider>
        );
    }
}

export default routes;