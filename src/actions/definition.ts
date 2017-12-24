import * as firebase from 'firebase';
import {Dispatch} from 'react-redux';
import {INDEX_DEFINITIONS} from '../constants/actions';
import {Definition} from '../models/definition';
import {State} from '../models/state';
import DataSnapshot = firebase.database.DataSnapshot;
import {updateEnvironment} from './environment';

const indexDefinitionsSuccess = (definitions: Definition[]) => {
    return {type: INDEX_DEFINITIONS, definitions};
};

export const indexDefinitions = () => {
    return (dispatch: Dispatch<State>, getState: () => State, getFirebase: () => any) => {
        const definitionsRef = getFirebase().database().ref('definitions');
        return definitionsRef.once('value').then((data: DataSnapshot) => {
            dispatch(indexDefinitionsSuccess(data.val()));
            dispatch(updateEnvironment({definitionLoaded: true}));
        });
    };
};
