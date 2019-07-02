import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { createInputChangeAction, createAddItemAction, createDeleteItemAction, createGetInitListAction } from './store/actionCreators';


function TodoList(props) {
    const init = props.initState;
    useEffect(() => {
        init();
    }, [init]);

    return (
        <div style={{ marginTop: 10, marginLeft: 10 }} >
            <Input
                onChange={props.handleInputChange}
                value={props.inputValue}
                placeholder="todo input"
                style={{ width: '300px ', marginRight: '10px' }}
            />
            <Button
                onClick={props.handleBtnClick}
                type="primary"
            >提交</Button>
            <List
                style={{ width: 300, marginTop: 10 }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => { props.handleItemClick(index) }}>{item}</List.Item>}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            // 提取 action 到 actionCreator 中。方便统一管理和自动化测试
            const action = createInputChangeAction(e.target.value)
            dispatch(action);
        },

        handleBtnClick() {
            const action = createAddItemAction();
            dispatch(action);
        },

        handleItemClick(index) {
            const action = createDeleteItemAction(index);
            dispatch(action);
        },

        initState() {
            const action = createGetInitListAction();
            // action 正常情况要发给 store，使用 saga 的时候，除了在 reducer 里接收 action 之外，在sagas.js中也能接收
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);