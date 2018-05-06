import React, { Component } from 'react';
import * as Layout from './layout'
import MainContent from './components/mainContent'
import StickyBar from './components/stickyBar'
class Home extends Component {
    render() {
        return (
            <Layout.HomeGrid>
                <StickyBar />
                <MainContent />
            </Layout.HomeGrid>
        );
    }
}

export default Home;