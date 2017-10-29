import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers';
import rootSaga from '../sagas';

import createHistory from 'history/createHashHistory'

import { routerMiddleware } from 'react-router-redux'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerMid = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(routerMid,sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
export {history};