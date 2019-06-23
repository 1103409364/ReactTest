import React from 'react';
import PropTypes from 'prop-types';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;

        this.setState(() => ({
            value
        }))
    }

    handleClick() {
        this.props.handleInput(this.state.value);
        this.setState(() => ({
            value: ''
        }))
    }

    render() {
        return (
            <div className="todoIpt">
                <input
                    value={this.state.value}
                    onChange={this.handleChange}
                ></input>

                <button onClick={this.handleClick}>确定</button>
            </div>
        )
    }
}

TodoInput.propTypes = {
    handleInput: PropTypes.func.isRequired
}

export default TodoInput;