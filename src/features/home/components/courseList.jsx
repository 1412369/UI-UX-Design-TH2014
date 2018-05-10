import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { FixedBar } from '../layout'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { ActionCardTravel } from 'material-ui/svg-icons';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class CourseList extends Component {
    render() {
        return (
            <List defaultValue={1}>
                <Link to="/home/courses/1" style={{textDecoration:"none"}}>
                    <ListItem
                        value={1}
                        style={{ color: "#1F4788" }}
                        leftAvatar={<Avatar backgroundColor="#1F4788" icon={<ActionCardTravel />} />}
                        primaryText="Thiết kế giao diện - CQ-TH2014"
                        secondaryText={<span style={{ color: "#1F4788" }}>Jan 28, 2014</span>}
                    />
                </Link>
                <Link to="/home/courses/2" style={{textDecoration:"none"}}>

                    <ListItem
                        value={2}
                        style={{ color: "#1F4788" }}
                        leftAvatar={<Avatar backgroundColor="#1F4788" icon={<ActionCardTravel />} />}
                        primaryText="Thiết kế giao diện - CQ-TH2014"
                        secondaryText={<span style={{ color: "#1F4788" }}>Jan 28, 2014</span>}
                    />
                </Link>
                <Link to="/home/courses/3" style={{textDecoration:"none"}}>
                    <ListItem
                        value={3}
                        style={{ color: "#1F4788" }}
                        leftAvatar={<Avatar backgroundColor="#1F4788" icon={<ActionCardTravel />} />}
                        primaryText="Thiết kế giao diện - CQ-TH2014"
                        secondaryText={<span style={{ color: "#1F4788" }}>Jan 28, 2014</span>}
                    />
                </Link>
            </List>
        );
    }
}

export default CourseList;