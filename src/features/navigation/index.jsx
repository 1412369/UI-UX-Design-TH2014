import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconLeft from './iconLeft/iconLeft'
import Title from './iconLeft/title'
import IconRight from './iconRight'
import UserInfo from './loginSuccess'
const Navigation = () => {
    return (
        <AppBar
            title={<Title />}
            iconElementLeft={<IconLeft />}
            iconElementRight={<UserInfo/>}
            titleStyle={{
                height:"70px",
            }}
            iconStyleRight={{
                margin:"4px"
            }}
            style={{
                position:"fixed",
                backgroundColor:"white"
            }}
        />
    );
};

export default Navigation;