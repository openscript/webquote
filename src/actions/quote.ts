import {SET_QUOTE_FROM_DEFINITION, UPDATE_ITEM} from '../constants/actions';
import {Definition} from '../models/definition';
import {Item} from '../models/item';

export const setQuoteFromDefinition = (definition: Definition) => {
    return {type: SET_QUOTE_FROM_DEFINITION, definition};
};

export const updateItem = (item: Item, fixed: number, recurring: number) => {
    return {type: UPDATE_ITEM, item: {...item, fixed, recurring}};
};
