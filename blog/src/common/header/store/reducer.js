import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// immutable 库可以生成 immutable 对象
const defaultState = fromJS({
    focused: false
});

export default (state=defaultState,action ) => {
    switch(action.type) {
        case actionTypes.SEARCH_FOCUS:
            // immutbale 对象的 set 方法，会结合之前的 immutable 对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true);
            // 不用 immutable 的写法：
            // {
            //     focused: true
            // }
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
            
            // {
            //     focused: false
            // }
        default:
            return state;
    }
}