import axios from 'axios';
import * as actionTypes from './actionTypes';

// const changeLogin= () => ({
//     type: actionTypes.CHANGE_LOGIN,
//     isLogin: true
// });

export const register = (account, password) => {
    return (dispatch) => {
        // 实际应该用 post
        axios.get('/api/register.json?account=' + account + '&password=' + password).then(res => {
            const result = res.data.data;
            if (result) {
                // dispatch(changeLogin());
            } else {
                alert('登陆失败!');
            }
        });
    }
}