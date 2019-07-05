import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// fromJS 把非 immutable 对象转为 immutable 对象，内部的数组也是 immutable 对象。是深层次的 转换。还有个 List 方法是浅转换
// 读写 immutable 对象的时候也需要是 immutable 提供的方法
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default (state=defaultState,action ) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            // immutbale 对象的 set 方法，会结合之前的 immutable 对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            // 这里需要注意，action 中的 data 也要转为 immutable 对象，保证数据不可变
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            // 同时改变多个数据需要连续调用 set，会让代码变得很长，可以使用 merge 同时修改多个数据内容，性能也更好
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}