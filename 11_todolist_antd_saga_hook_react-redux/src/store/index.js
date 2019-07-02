import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
// )
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(
    reducer,
    enhancer
    // applyMiddleware([thunk,])
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(todoSagas);

export default store;