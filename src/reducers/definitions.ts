import * as types from '../constants/actions';
import {Definition} from '../models/definition';

export const definitions = (state: Definition[] = [], action: any) => {
    switch (action.type) {
        case types.INDEX_DEFINITIONS:
            return action.definitions ? action.definitions : state;
        default:
            return state;
    }
};
