import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd';
import store from './store'; //要从 store 中拿数据，引入 store
import { createInputChangeAction, createAddItemAction, createDeleteItemAction, createInitAction,createGetInitListAction } from './store/actionCreators';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType';
import TodoListUI from './todoListUI';
// import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        // 给 store 添加一个订阅函数
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange(e) {
        console.log(e.target.value);

        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     inputValue: e.target.value
        // };

        // 提取 action 到 actionCreator 中。方便统一管理和自动化测试
        const action = createInputChangeAction(e.target.value)

        store.dispatch(action);
    }
    // 监听 store 变化，数据变了就会重新获取 store 里的数据
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM,
        // }

        const action = createAddItemAction();

        store.dispatch(action);
    }

    handleItemClick(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index: index
        // }

        const action = createDeleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount() {
        const action = createGetInitListAction();
        // action 正常情况要发给 store，使用 saga 的时候，除了在 reducer 里接收 action 之外，在sagas.js中也能接收
        store.dispatch(action);
        // axios.get('/api/todolist').then(function (res) {
        //     const action = createInitAction(res.data);
        //     store.dispatch(action);
        // })
        
        // 使用 thunk
        // const action = createGetListAction();
        // store.dispatch(action);
    }

    render() {
        return (
            <TodoListUI
                handleInputChange={this.handleInputChange}
                inputValue={this.state.inputValue}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemClick={this.handleItemClick}
            />
        )
    }
}

export default TodoList;