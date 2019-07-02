import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionType';

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return { ...state, inputValue: action.inputValue }
        case ADD_TODO_ITEM:
            return { ...state, list: state.list.concat(state.inputValue), inputValue: '' }
        case DELETE_TODO_ITEM:
            return {
                ...state,
                list: state.list.filter((item, index) => index === action.index ? '' : item)
            }
        case INIT_TODO_LIST:
            return {
                ...state,
                list: action.list
            }
        default:
            return state;
    }
}