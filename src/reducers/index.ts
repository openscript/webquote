import {firebaseReducer} from 'react-redux-firebase';
import {routerReducer} from 'react-router-redux';
import {definitions} from './definitions';
import {environment} from './environment';
import {quote} from './quote';

export const reducers = {
    environment,
    definitions,
    firebase: firebaseReducer,
    quote,
    router: routerReducer
};
