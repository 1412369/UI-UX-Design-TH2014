import React, { Component } from 'react';
import * as Layout from './layout'
import MainContent from './components/mainContent'
import StickyBar from './components/stickyBar'
import { Link, Route } from 'react-router-dom'
import DetailCourse from '../detailCourse'
import { Paper } from 'material-ui'
import styled from 'styled-components'
const Breadcrumb = styled.div`
    font-family:Roboto;
    font-size:15px;
    color:#1F4788;
    font-weight:bold;

`
class Home extends Component {
    render() {
        return (
            <Layout.HomeGrid>
                <StickyBar />
                <Layout.HomeContent>
                    <Paper>
                        <Breadcrumb style={{ padding: "20px 0 0 20px" }}>break cum break cum break cum break cum break cum</Breadcrumb>
                            <Route exact path={`${this.props.match.path}`} component={DetailCourse} />
                            <Route path={`${this.props.match.path}/:id`} component={DetailCourse} />
                    </Paper>
                </Layout.HomeContent>
            </Layout.HomeGrid>
        );
    }
}

export default Home;