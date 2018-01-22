import {Dispatch} from 'react-redux';
import * as simpleExample from '../../examples/simpleExample.json';
import {INDEX_DEFINITIONS} from '../constants/actions';
import {Definition} from '../models/definition';
import {State} from '../models/state';
import {updateEnvironment} from './environment';

const indexDefinitionsSuccess = (definitions: Definition[]) => {
    return {type: INDEX_DEFINITIONS, definitions};
};

export const indexDefinitions = () => {
    return (dispatch: Dispatch<State>) => {
        return new Promise((resolve) => {
            const definitions: Definition[] = [];
            definitions.push((simpleExample as any));
            dispatch(indexDefinitionsSuccess(definitions));
            dispatch(updateEnvironment({definitionLoaded: true}));
            resolve();
        });
    };
};
