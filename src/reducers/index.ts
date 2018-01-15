import {firebaseReducer} from 'react-redux-firebase';
import {routerReducer} from 'react-router-redux';
import {contact} from './contact';
import {definitions} from './definitions';
import {environment} from './environment';
import {quote} from './quote';
import {quotes} from './quotes';

export const reducers = {
    contact,
    environment,
    definitions,
    firebase: firebaseReducer,
    quote,
    savedQuotes: quotes,
    router: routerReducer
};
