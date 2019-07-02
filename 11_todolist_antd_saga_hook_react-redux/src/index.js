import React from 'react';
import ReactDOM from 'react-dom';
import App from './TodoList';
import store from './store'; //要从 store 中拿数据，引入 store
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

