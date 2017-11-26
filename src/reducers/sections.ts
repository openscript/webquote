import * as types from '../constants/actions';
import {Section} from '../models/section';

export const sections = (state: Section[] = [], action: any) => {
    switch (action.type) {
        case types.UPDATE_ITEM:
            return state.map((section) => {
                const items = section.items.map(
                    (item) => item.id === action.item.id ? action.item : item
                );
                return {...section, items};
            });
        default:
            return state;
    }
};
