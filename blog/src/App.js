import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GlobalStyled } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont.js';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyled />
            <Iconfont />
            <Header />
        </Provider>
    );
}

export default App;
