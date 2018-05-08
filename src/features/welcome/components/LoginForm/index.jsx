import React, { Component } from 'react';
import { TextField } from 'material-ui'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Paper, RaisedButton, Checkbox } from 'material-ui';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Types from '../../../login/constant.js'
const FormStyled = styled.div`
padding:20px;
text-align:center;

`
const style = {
    height: 400,
    width: 400,
    marginTop: 100,
    textAlign: 'center',
    display: 'inline-block',
};
class LoginForm extends Component {
    onLoginSuccess = () => {
        this.props.dispatch({ type: Types.LOGIN_SUCCESS })
        this.props.history.push('/home')
    }
    render() {
        console.log("this.rops", this.props)
        return (
            <Paper style={style}>
                <h4>
                    Đăng nhập vào khoá học
                </h4>
                <FormStyled>
                    <TextField
                        hintText="Nhập vào email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        floatingLabelFixed={true}
                    />
                    <TextField
                        hintText="Nhập vào mật khẩu"
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                        fullWidth={true}
                        type="password"
                        style={{
                            marginTop: "15px",
                            marginBottom: "20px"
                        }}
                    />
                    <Checkbox
                        label="Nhớ mật khẩu"
                        style={{
                            maxWidth: "160px",
                            float: "left"
                        }}
                    />
                    <a href="javascript:void(0)">Quên mật khẩu</a>
                </FormStyled>
                <RaisedButton
                    onClick={this.onLoginSuccess}
                    className="loginButton"
                    primary
                    buttonStyle={{
                        color: "white",
                        width: "150px",
                    }}
                >Đăng nhập</RaisedButton>
            </Paper>
        );
    }
}
const mapDispatch = (dispatch) => {
    return {
        dispatch
    }
}
export default compose(
    withRouter,
    connect(null, mapDispatch),
)(LoginForm)