import React, { Component } from 'react';
import * as Layout from '../layout'
import { Paper } from 'material-ui'
import EventList from './eventList'
import CourseList from './courseList'
import EnrollList from './enrollList'
class MainContent extends Component {
    render() {
        return (
            <React.Fragment>
     
                <Layout.ContentLayout>
                    <Layout.EventGrid>
                        <h4>Sự kiện sắp diễn ra</h4>
                        <EventList />
                    </Layout.EventGrid>
                    <Layout.CourseGrid>
                        <h4>Khoá học gần nhất của tôi</h4>
                        <CourseList />
                    </Layout.CourseGrid>
                    <Layout.EnrollGrid>
                        <h4>Ghi danh môn học</h4>
                        <EnrollList />
                    </Layout.EnrollGrid>
                </Layout.ContentLayout>
            </React.Fragment>

        );
    }
}

export default MainContent;