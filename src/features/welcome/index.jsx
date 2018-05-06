import React, { Component } from 'react';
import * as Layout from './layout'
import Info from './components/Info'
import LoginForm from './components/LoginForm'
import Footer from '../footer'
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
                <Layout.GridFooter>
                    <Footer />
                </Layout.GridFooter>
            </Layout.GridContainer>
        );
    }
}

export default Welcome;