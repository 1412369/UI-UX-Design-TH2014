import React, { Component } from 'react';
import * as Layout from './layout'
import MainContent from './components/mainContent'
import StickyBar from './components/stickyBar'
import Calendar from './components/calendar'
import { Link, Route } from 'react-router-dom'
import DetailCourse from '../detailCourse'
import { Paper } from 'material-ui'
import styled from 'styled-components'
import AllCourses from './components/allCourses'
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
                        <Breadcrumb style={{ padding: "20px 0 0 20px" }}>{this.props.location.pathname}</Breadcrumb>
                            <Route exact path={`${this.props.match.path}`} component={MainContent} />
                            <Route exact path={`${this.props.match.path}/courses/:id`} component={DetailCourse} />
                            <Route exact path={`${this.props.match.path}/courses`} component={AllCourses} />
                    </Paper>
                </Layout.HomeContent>
                <Calendar />
            </Layout.HomeGrid>
        );
    }
}

export default Home;