import * as types from '../constants/actions';
import {defaultQuote, Quote} from '../models/quote';

export const quote = (state: Quote|null = null, action: any) => {
    switch (action.type) {
        case types.SET_QUOTE_FROM_DEFINITION:
            return {title: action.definition.name, sections: action.definition.sections};
        case types.SET_QUOTE_FROM_SAVED_QUOTE:
            return {...action.quote};
        case types.UPDATE_ITEM:
            if (state) {
                const sections = state.sections.map((section) => {
                    const items = section.items.map(
                        (item) => item.id === action.item.id ? action.item : item
                    );
                    return {...section, items};
                });
                return {...state, sections};
            }
            return null;
        default:
            return state;
    }
};
