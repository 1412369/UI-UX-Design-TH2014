import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { CalendarLayout } from '../layout'
import { CardStack, Card } from 'react-cardstack';
import DeadlineItem from './calendarItem'



class Calendar extends Component {
    render() {
        return (
            <CalendarLayout>
                <InfiniteCalendar
                    width={330}
                    height={200}
                    disabledDays={[0, 6]}
                />
                <br />
                <CardStack
                    height={150}
                    width={330}
                    background='#f8f8f8'
                    hoverOffset={25}>
                    <Card background='#448aff'>
                        <DeadlineItem title="Thiết kế giao diện - PA04">
                            Thiết kế giao diện - PA04
                        </DeadlineItem>
                    </Card>
                    <Card background='#559fff'>
                        <DeadlineItem title="Thiết kế giao diện - PA04">
                            Thiết kế giao diện - PA04
                        </DeadlineItem>
                    </Card>
                </CardStack>
            </CalendarLayout>
        );
    }
}

export default Calendar;