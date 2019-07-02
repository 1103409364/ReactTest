import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,INIT_TODO_LIST, GET_INIT_LIST } from './actionType';
// import axios from 'axios';


export const createInputChangeAction = value => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
})

export const createAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const createDeleteItemAction = index => ({
    type: DELETE_TODO_ITEM,
    index: index
})

export const createInitAction = list => ({
    type: INIT_TODO_LIST,
    list: list
})

// 使用thunk
// export const createGetListAction = () => {
//     // 使用中间件后，可以让 actionCreator 返回一个函数，参数可以接收一个 dispatch
//     return (dispatch) => {
//         axios.get('/api/todolist').then(function (res) {
//             const action = createInitAction(res.data);
//             dispatch(action);
//         })
//     }
// }

// 把异步操作放在这里，可以简化生命周期函数，方便管理和自动化测试

// 使用saga
export const createGetInitListAction = () => ({
    type: GET_INIT_LIST
})