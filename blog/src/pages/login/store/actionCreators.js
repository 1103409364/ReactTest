import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin= () => ({
    type: actionTypes.CHANGE_LOGIN,
    isLogin: true
});

export const logout= () => ({
    type: actionTypes.LOGOUT,
    isLogin: false
});

export const login = (account, password) => {
    return (dispatch) => {
        // 实际应该用 post
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin());
            } else {
                alert('登陆失败!');
            }
        });
    }
}