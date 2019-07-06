import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
// fromJS 会把对象变成 immutable 对象，深层次的转换。还有个方法 List 是浅转换
// content 里面存放的实际上是 dom 字符串
const defaultState = fromJS({
    
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER:

        default:
            return state;
    }
}