import React, { Component } from 'react';
import { HardwareComputer } from 'material-ui/svg-icons'


class Logo extends Component {
    render() {
        return (
            <HardwareComputer
                style={{
                    height:"50px",
                    width:"50px",
                    marginLeft:"100px",
                    color:"#1F4788"
                }}
            />
        );
    }
}

export default Logo;