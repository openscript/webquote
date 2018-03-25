import * as firebase from 'firebase';
import createHashHistory from 'history/createHashHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider, Store} from 'react-redux';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';
import {ConnectedRouter as Router, routerMiddleware} from 'react-router-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import {persistCombineReducers, persistStore} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import {PersistConfig} from 'redux-persist/es/types';
import {PersistGate} from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import {App} from './containers/app';
import {defaultState, State} from './models/state';
import {reducers} from './reducers';
import {firebaseConfig, reduxFirebaseConfig} from './utils/firebase';

// set up routing history
// const history = createBrowserHistory({basename: BASE_URL});
const history = createHashHistory();
const reduxRouterMiddleware = routerMiddleware(history);

// initialize firebase
firebase.initializeApp(firebaseConfig);

// set up store
const persistConfig: PersistConfig = {
    key: 'webquote',
    whitelist: ['savedQuotes'],
    storage
};
const persistReducers = persistCombineReducers<State>(persistConfig, reducers);
const store: Store<State> = createStore(
    persistReducers,
    defaultState,
    compose(
        reactReduxFirebase(firebase, reduxFirebaseConfig),
        applyMiddleware(thunk.withExtraArgument(getFirebase), reduxRouterMiddleware),
        devToolsEnhancer({})
    )
);
const persistor = persistStore(store);

// initialize app
ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={<span>Loading local storage...</span>} persistor={persistor}>
            <Router history={history}>
                <App />
            </Router>
        </PersistGate>
    </Provider>
), document.getElementById('app'));
