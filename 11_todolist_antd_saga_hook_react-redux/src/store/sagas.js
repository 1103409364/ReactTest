// redux-saga把异步操作放在单独的文件里
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from "./actionType";
import { createInitAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    // axios.get('/api/todolist').then(function (res) {
    // const action = createInitAction(res.data);
    // 这里没有 store，需要使用put方法
    // store.dispatch(action);
    // })

    // generator 错误处理
    try {
        const res = yield axios.get('/api/todolist')
        const action = createInitAction(res.data);
        // action 派发给store，store 把这个 action 给reducer
        yield put(action);
    } catch (e) {
        console.log('网络请求失败');
    }
}

function* todoSagas() {
    // takeEvery 捕捉每一个 action。 当 action 是 GET_INIT_LIST，执行 getInitList
    yield takeEvery(GET_INIT_LIST, getInitList);
}

// 导出 generator 函数
export default todoSagas;