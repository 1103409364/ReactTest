import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.item !== this.props.item) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <li
                className="Todo"
                onClick={() => { this.props.handleDelete(this.props.id) }}
            >
                {this.props.item}
            </li>
        )
    }
}

Todo.propTypes = {
    // 其中一种类型
    item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    id: PropTypes.string.isRequired
}

export default Todo;