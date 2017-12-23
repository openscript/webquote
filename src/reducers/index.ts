import {firebaseReducer} from 'react-redux-firebase';
import {routerReducer} from 'react-router-redux';
import {definitions} from './definitions';
import {quote} from './quote';

export const reducers = {
    definitions,
    firebase: firebaseReducer,
    quote,
    router: routerReducer
};
