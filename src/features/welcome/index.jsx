import React, { Component } from 'react';
import * as Layout from './layout'
import Info from './components/Info'
import LoginForm from './components/LoginForm'
class Welcome extends Component {
    render() {
        return (
            <Layout.GridContainer>
                <Layout.GridInfo>
                    <Info />
                </Layout.GridInfo>
                <Layout.GridForm>
                    <LoginForm />
                </Layout.GridForm>
            </Layout.GridContainer>
        );
    }
}

export default Welcome;