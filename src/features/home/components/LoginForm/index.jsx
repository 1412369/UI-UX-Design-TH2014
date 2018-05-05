import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
const style = {
    height: 400,
    width: 400,
    marginTop: 100,
    textAlign: 'center',
    display: 'inline-block',
  };

class LoginForm extends Component {
    render() {
        return (
            <Paper style={style} zDepth={2} />
        );
    }
}

export default LoginForm;