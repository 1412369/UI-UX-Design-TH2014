import React, { Component } from 'react';
import { List, ListItem } from 'material-ui'
import { ActionLanguage, CommunicationEmail } from 'material-ui/svg-icons'


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    float: 'left'
};

class IconRight extends Component {
    render() {
        return (
            <List style={flexContainer}>
                <ListItem primaryText="Ngôn ngữ"
                    leftIcon={
                        <ActionLanguage
                        color="black"
                        />
                    }
                />
                <ListItem
                    primaryText="Liên hệ"
                    leftIcon={
                        <CommunicationEmail
                        color="black"
                        />
                    }
                />
            </List>
        );
    }
}

export default IconRight;