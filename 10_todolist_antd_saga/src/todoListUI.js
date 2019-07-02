import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

function TodoListUI(props) {
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

export default TodoListUI;