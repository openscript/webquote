import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, Store} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import {App} from './containers/app';
import {defaultState, State} from './models/state';
import {reducers} from './reducers';

// set up store
const store: Store<State> = createStore(
    combineReducers(reducers),
    defaultState,
    devToolsEnhancer({})
);

// initialize app
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));
