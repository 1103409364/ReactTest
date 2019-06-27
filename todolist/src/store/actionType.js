// actionType 拆分，为什么要拆分？
// 因为 actionType 拼写错误是不会报错的，写成常量，当拼下面的常量写错误的时候会立即报错：undefined
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';