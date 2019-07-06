import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { actionCreators } from './store';
// import {

// } from './style.js'

class Write extends React.PureComponent {
    render() {
        const { isLogin } = this.props;
        // 未登陆渲染登陆页,已登陆,跳转到首页
        if (isLogin) {
            return (
                <div>Write</div>
            )
        }

        return <Redirect to="/login" />
    }
}

const mapStateToProps = state => ({
    isLogin: state.getIn(['login','isLogin'])
});

const mapDispatchToProps = dispatch => ({
    // login(account, password) {
    //     dispatch(actionCreators.login(account.value, password.value));
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);