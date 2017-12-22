import * as firebase from 'firebase';
import {createBrowserHistory} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, Store} from 'react-redux';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import {ConnectedRouter as Router, routerMiddleware} from 'react-router-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {App} from './containers/app';
import {defaultState, State} from './models/state';
import {reducers} from './reducers';
import {firebaseConfig, reduxFirebaseConfig} from './utils/firebase';

// Set up routing history
const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware(history);

// initialize firebase
firebase.initializeApp(firebaseConfig);

// set up store
const store: Store<State> = createStore(
    combineReducers(reducers),
    defaultState,
    compose(
        reactReduxFirebase(firebase, reduxFirebaseConfig),
        applyMiddleware(thunk.withExtraArgument(getFirebase), reduxRouterMiddleware),
        devToolsEnhancer({})
    )
);

// initialize app
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
), document.getElementById('app'));
