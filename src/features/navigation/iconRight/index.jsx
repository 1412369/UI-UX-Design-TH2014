import React, { Component } from 'react';
import { List, ListItem } from 'material-ui'
import { ActionLanguage, CommunicationEmail } from 'material-ui/svg-icons'


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    color: "white",
    float: 'left'
};

class IconRight extends Component {
    render() {
        return (
            <List style={flexContainer}>
                <ListItem primaryText="Ngôn ngữ"
                    leftIcon={
                        <ActionLanguage
                            color="white"
                            style={{padding:"0"}}
                            
                        />
                    }
                    style={{ color: "white",padding:"0" }} />
                <ListItem
                    primaryText="Liên hệ"
                    leftIcon={
                        <CommunicationEmail
                            color="white"
                            style={{padding:"0"}}
                        />
                    }
                    style={{ color: "white",padding:"0" }} 
                    />
            </List>
        );
    }
}

export default IconRight;