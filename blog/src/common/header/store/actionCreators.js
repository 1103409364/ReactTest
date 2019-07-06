import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
// 这个方法不需要暴露，放在顶部。仅供内部使用
const changeList = data => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});

export const getList = () => {
    return dispatch => {
        axios.get('/api/header.json').then(res => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('error');
        });
    }
}