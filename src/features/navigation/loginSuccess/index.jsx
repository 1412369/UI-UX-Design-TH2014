import React, { Component } from 'react';
import styled from 'styled-components'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { ActionSettings,AlertAddAlert,ActionVerifiedUser} from 'material-ui/svg-icons';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import PropTypes from 'prop-types'

const flexContainer = {
    display:"flex",
    float:"left",
    padding: 0,
};


const ListStyled = styled.ul`
    list-style-type:none;
    display:flex;
    float:left;
    padding:0;
    margin:0 100px 0 0;
    li {
        margin:20px;
        float:left;
        img {
            width:30px;
            height:30px;
        }
    }
`
const ItemStyled = styled.li`

`
class UserHeader extends Component {
    render() {
        return (
           < List defaultValue={1} style={flexContainer}>
            <ListItem
                value={1}
                style={{ color: "#1F4788"}}
                leftAvatar={<Avatar backgroundColor="#fdcb6e" icon={<ActionSettings />} />}
            />
            <ListItem
                value={2}
                style={{ color: "#1F4788"}}
                leftAvatar={<Avatar backgroundColor="#fdcb6e" icon={<AlertAddAlert />} />}
            />
            <ListItem
                value={2}
                style={{ color: "#1F4788",width:"250px" }}
                leftAvatar={<Avatar backgroundColor="#fdcb6e" icon={<ActionVerifiedUser />} />}
                primaryText="Ly Thanh Nhan"
            />
        </List>
        );
    }
}

export default UserHeader;