import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconLeft from './iconLeft/iconLeft'
import Title from './iconLeft/title'
import IconRight from './iconRight'
const Navigation = () => {
    return (
        <AppBar
            title={<Title />}
            iconElementLeft={<IconLeft />}
            iconElementRight={<IconRight/>}
            titleStyle={{
                height:"70px",
            }}
        />
    );
};

export default Navigation;