import React from 'react'
import {Eventcalendar} from '../../../../assets/js/mobiscroll.react.min.js'
import {CalendarLayout} from '../../layout'
export default class EventcalendarDemo extends React.Component {
    constructor(props) {
        super(props);

        var now = new Date();
        
        this.state = {
            myEvents: [{
                d: new Date(now.getFullYear(), now.getMonth(), 8, 8, 0),
                text: 'Green box to post office',
                color: '#6e7f29'
            }, {
                start: new Date(now.getFullYear(), now.getMonth(), 8, 8, 45),
                end: new Date(now.getFullYear(), now.getMonth(), 8, 9, 0),
                text: 'Quick mtg. with Martin',
                color: '#de3d83'
            }, {
                start: new Date(now.getFullYear(), now.getMonth(), 8, 15, 0),
                end: new Date(now.getFullYear(), now.getMonth(), 8, 16, 0),
                text: 'General orientation',
                color: '#f67944'
            }, {
                d: (now.getMonth() + 1) + '/14',
                text: 'Dexter BD',
                color: '#37bbe4'
            }, {
                d: (now.getMonth() + 1) + '/5',
                text: 'Luke BD',
                color: '#37bbe4'
            }, {
                d: 'w3',
                text: 'Employment (Semi-weekly)',
                color: '#635045'
            }, {
                d: 'w5',
                text: 'Employment (Semi-weekly)',
                color: '#ff9966'
            }, {
                start: new Date(now.getFullYear(), 1, 7),
                end: new Date(now.getFullYear(), 1, 25),
                text: 'Dean OFF',
                color: '#99ff33'
            },  {
                start: new Date(now.getFullYear(), 6, 2),
                end: new Date(now.getFullYear(), 6, 17),
                text: 'Jason OFF',
                color: '#cc9900'
            }, {
                start: new Date(now.getFullYear(), 9, 1),
                end: new Date(now.getFullYear(), 9, 12),
                text: 'Sharon OFF',
                color: '#cc6699'
            }, {
                d: '12/25',
                text: 'Christmas Day',
                color: '#ff0066'
            }, {
                d: '1/1',
                text: 'New Year\'s day',
                color: '#99ccff'
            }, {
                d: '4/1',
                text: 'April Fool\'s Day',
                color: '#ff6666'
            }, {
                d: '11/2',
                text: 'File Form 720 for the third quarter',
                color: '#a63e14'
            }, {
                d: '11/2',
                text: 'File Form 730 and pay tax on wagers accepted during September',
                color: '#a63e14'
            },{
                d: '11/30',
                text: 'File Form 2290 and pay the tax for vehicles first used during October',
                color: '#a63e14'
            }]
        };
    }
    render() {
        return (
            <CalendarLayout>
            <Eventcalendar
                lang="en"                   // Specify language like: lang="pl" or omit setting to use default
                theme="ios"                 // Specify theme like: theme="ios" or omit setting to use default
                display="inline"            // Specify display mode like: display="bottom" or omit setting to use default
                data={this.state.myEvents}  // More info about data: https://docs.mobiscroll.com/4-2-1/react/eventcalendar#opt-data
                view={{                     // More info about view: https://docs.mobiscroll.com/4-2-1/react/eventcalendar#opt-view
                    calendar: {
                        type: 'week',
                        size: 2
                    },
                    eventList: {
                        type: 'week',
                        size: 2
                    }
                }}
            />
            </CalendarLayout>
        );
    }    
}