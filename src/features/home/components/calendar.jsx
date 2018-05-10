import React, { Component } from 'react';
import InfiniteCalendar,{  
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates,} from 'react-infinite-calendar';
import { CalendarLayout } from '../layout'
import { CardStack, Card } from 'react-cardstack';
import DeadlineItem from './calendarItem'

const MultipleDatesCalendar = withMultipleDates(Calendar);
  

class AppCalendar extends Component {
    render() {
        const current_time = new Date().getTime()
        return (
            <CalendarLayout>
                <InfiniteCalendar
                    Component={MultipleDatesCalendar}
                    width={330}
                    height={200}
                    interpolateSelection={defaultMultipleDateInterpolation}
                    selected={[
                        new Date(current_time+1000*60*60*24),
                        new Date(current_time+1000*60*60*48),
                        new Date(current_time+1000*60*60*72),
                        new Date(current_time+1000*60*60*72),
                    ]}
                    
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

export default AppCalendar;