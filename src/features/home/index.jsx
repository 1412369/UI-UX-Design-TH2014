import React, { Component } from 'react';
import * as Layout from './layout'
import MainContent from './components'
class Home extends Component {
    render() {
        return (
            <Layout.HomeGrid>
                <MainContent />
            </Layout.HomeGrid>
        );
    }
}

export default Home;