import React, { Component } from 'react';
import { HomeContent, EventGrid, CourseGrid, ContentLayout } from '../layout'
import { Paper } from 'material-ui'
import EventList from './eventList'
import CourseList from './courseList'
class MainContent extends Component {
    render() {
        return (
            <HomeContent>
                <Paper>
                    <ContentLayout>
                        <EventGrid>
                            <h4>Sự kiện sắp diễn ra</h4>
                            <EventList/>
                        </EventGrid>
                        <CourseGrid>
                        <h4>Khoá học gần nhất của tôi</h4>
                        <CourseList />
                        </CourseGrid>
                    </ContentLayout>
                </Paper>
            </HomeContent>
        );
    }
}

export default MainContent;