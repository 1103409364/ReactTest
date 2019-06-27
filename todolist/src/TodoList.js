import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'; //要从 store 中拿数据，引入 store
import { createInputChangeAction, createAddItemAction, createDeleteItemAction } from './store/actionCreators';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType';

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

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }} >
                <Input
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    placeholder="todo input"
                    style={{ width: '300px ', marginRight: '10px' }} />
                <Button
                    onClick={this.handleBtnClick}
                    type="primary"
                >提交</Button>
                <List
                    style={{ width: 300, marginTop: 10 }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodoList;