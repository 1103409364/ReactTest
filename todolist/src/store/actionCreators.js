import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType';

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

