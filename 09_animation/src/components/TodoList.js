import React from 'react';
import Todo from './Todo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoList.css';

/* 假设输入的内容是不同的 ， 把输入内容作为 key 和 id*/
function TodoList(props) {
    return (
        <ul className="TodoList">
            <TransitionGroup>
                {props.todos.map((item, index) => (
                    <CSSTransition
                        timeout={500}
                        classNames="item"
                        key={item}
                    >
                        <Todo
                            item={item}
                            id={item}
                            handleDelete={props.handleDelete}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default TodoList;