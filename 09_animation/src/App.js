import React, { Fragment } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(value) {
        this.setState((state)=>{
            return {
                todos: [...state.todos, value]
            }
        })
    }

    handleDelete(id) {
        this.setState((state)=>{
            return {
                todos: state.todos.filter((item, index) => {
                    if (id !== item) {
                        return true;
                    } else {
                        return false;
                    }
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <TodoInput handleInput={this.handleInput}/>
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
            </Fragment >
        );
    }
}

export default App;
