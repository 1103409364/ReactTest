import React from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style.js'

class Login extends React.PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" />
                    <Input placeholder="密码"/>
                    <Button>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);