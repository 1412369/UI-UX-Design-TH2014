import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Test from './container/test'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './features/navigation';
import Welcome from './features/welcome';
import Home from './features/home'
import Footer from './features/footer'
import { fitTheme, GridContainer, GridHeader, GridFooter, GridContent } from './layout'
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
                            <Route exact path="/" component={Welcome} />
                            <Route exact path="/home" component={Home} />
                            <Route path="*" render={() => <div>Not found</div>} />
                        </Switch>
                    </GridContent>
                </GridContainer>
                <GridFooter>
                    <Footer />
                </GridFooter>
            </MuiThemeProvider>
        );
    }
}

export default routes;