import { combineReducers } from 'redux-immutable'; //使用 redux-immutable 让state成为 immutable 对象
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';

// reducer 拆分和整合，防止 reducer 代码量过大
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
})