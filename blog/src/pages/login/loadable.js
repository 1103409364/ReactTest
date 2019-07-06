// 把普通组件包装成异步组建
import React from 'react';
import Loadable from 'react-loadable';
// 加载过程中显示的东西
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
    // 需要异步加载的组件 import 进来，这里引入当前路径下的 index.js
    loader: () => import('./'),
    // loding 是加载中要渲染的组件, 提示用户正在加载
    loading() {
        return <div className="loading">加载中</div> // 要使用 jsx 就要引入 react
    }
});
// 导出一个无状态组件
export default () => <LoadableComponent />