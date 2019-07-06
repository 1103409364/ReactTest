import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
    LoginWrapper,
    LoginTitle,
    SignIn,
    SignUp,
    LoginBox,
    Input,
    Button,
} from './style.js'

class Register extends React.PureComponent {
    render() {
        const { register, isLogin } = this.props;
        if (!isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>
                            <Link to="/login">
                                <SignIn>登陆</SignIn>
                            </Link>
                            <Link to="/register">
                                <SignUp >注册</SignUp>
                            </Link>
                        </LoginTitle>
                        <Input placeholder="账号" ref={input => this.account = input} />
                        <Input placeholder="密码" type="password" ref={input => this.password = input} />
                        <Button
                            onClick={() => register(this.account, this.password)}
                        >注册</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }

        return <Redirect to="/" />
    }
}

const mapStateToProps = state => ({
    isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatchToProps = dispatch => ({
    register(account, password) {
        dispatch(actionCreators.register(account.value, password.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);