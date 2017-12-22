import * as firebase from 'firebase';
import {Dispatch} from 'react-redux';
import {INDEX_DEFINITIONS} from '../constants/actions';
import {Definition} from '../models/definition';
import {State} from '../models/state';

const indexDefinitionsSuccess = (definitions: Definition[]) => {
    return {type: INDEX_DEFINITIONS, definitions};
};

export const indexDefinitions = () => {
    return (dispatch: Dispatch<State>, getState: () => State, getFirebase: () => any) => {
        const definitionsRef = getFirebase().database().ref('definitions');
        definitionsRef.on('value', (data: firebase.database.DataSnapshot) => {
            dispatch(indexDefinitionsSuccess(data.val()));
        });
    };
};
