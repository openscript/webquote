import {firebaseReducer} from 'react-redux-firebase';
import {routerReducer} from 'react-router-redux';
import {definitions} from './definitions';
import {sections} from './sections';

export const reducers = {
    definitions,
    firebase: firebaseReducer,
    router: routerReducer,
    sections
};
