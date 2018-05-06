import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class EventList extends Component {
    render() {
        return (
            <List>
                <ListItem
                    leftAvatar={<Avatar src="/public/images/math.jpg" />}
                    primaryText="TKGD-TH2014-Nop PA 04"
                    secondaryText={<span style={{color:"#e17055"}}>Jan 28, 2014</span>}
                   
                />
                <ListItem
                    leftAvatar={<Avatar src="/public/images/math.jpg" />}
                    primaryText="TKGD-TH2014-Nop PA 04"
                    secondaryText={<span style={{color:"#e17055"}}>Jan 28, 2014</span>}
                   
                    secondaryTextLines={1}
                />
                <ListItem
                    leftAvatar={<Avatar src="/public/images/math.jpg" />}
                    primaryText="TKGD-TH2014-Nop PA 04"
                    secondaryText={<span style={{color:"#e17055"}}>Jan 28, 2014</span>}
                   
                    secondaryTextLines={1}
                />
            </List>
        );
    }
}

export default EventList;