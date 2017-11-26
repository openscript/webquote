import * as types from '../constants/actions';
import {defaultSection, Section} from '../models/section';

export const sections = (state: Section = defaultSection, action: any) => {
    switch (action.type) {
        case types.UPDATE_ITEM:
            return {...state, ...action.item};
        default:
            return state;
    }
};
