import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { FixedBar } from '../layout'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { ActionChromeReaderMode} from 'material-ui/svg-icons';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import PropTypes from 'prop-types'
const flexContainer = {
    display:"flex",
    float:"left",
    padding: 0,
};

class EnrollList extends Component {
    render() {
        return (
            <List defaultValue={1} style={flexContainer}>
                <ListItem
                    value={1}
                    style={{ color: "#1F4788",width:"300px"}}
                    leftAvatar={<Avatar backgroundColor="#ff7675" icon={<ActionChromeReaderMode />} />}
                    primaryText="Chính quy - CQ/2014"
                />
                <ListItem
                    value={2}
                    style={{ color: "#1F4788",width:"300px" }}
                    leftAvatar={<Avatar backgroundColor="#ff7675" icon={<ActionChromeReaderMode />} />}
                    primaryText="Cao đẳng- CĐ/2014"
                />
                <ListItem
                    value={2}
                    style={{ color: "#1F4788",width:"300px" }}
                    leftAvatar={<Avatar backgroundColor="#ff7675" icon={<ActionChromeReaderMode />} />}
                    primaryText="Cao đẳng- CĐ/2014"
                />
            </List>
        );
    }
}

export default EnrollList;