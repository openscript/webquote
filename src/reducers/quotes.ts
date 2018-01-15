import * as types from '../constants/actions';
import {Quote} from '../models/quote';

export const quotes = (state: Quote[] = [], action: any) => {
    switch (action.type) {
        case types.SAVE_QUOTE:
            return [...state, ...[action.quote]];
        default:
            return state;
    }
};
