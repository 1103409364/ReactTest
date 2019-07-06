import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (data) => ({
    type: actionTypes.CHANGE_DETAIL,
    data
});

export const getDetail = (id) => {
    return (dispatch) => {
        // 实际请求的时候,会给后端不同的 id 参数,后端根据不同的 id 返回内容
        axios.get('/api/detail.json?id=' + id).then(res => {
            const result = res.data.data;
            dispatch(changeDetail(result));
        }).catch(()=>{
            console.log('error');
        });
    }
}