import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconLeft from './iconLeft/iconLeft'
import Title from './iconLeft/title'
import IconRight from './iconRight'
import UserInfo from './loginSuccess'
import { connect } from 'react-redux'
import { userInfo } from 'os';
const Navigation = ({ user }) => {
    console.log("user", user)
    return (
        <AppBar
            title={<Title />}
            iconElementLeft={<IconLeft />}
            iconElementRight={user.logged ? <UserInfo /> : <IconRight />}
            titleStyle={{
                height: "70px",
            }}
            iconStyleRight={{
                margin: "4px"
            }}
            style={{
                position: "fixed",
                backgroundColor: "white"
            }}
        />
    );
};
const mapState = (state) => ({
    user: state.user
})
export default connect(mapState)(Navigation);