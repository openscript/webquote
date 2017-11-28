import {UPDATE_ITEM} from '../constants/actions';
import {Item} from '../models/item';

export const updateItem = (item: Item, fixed: number, recurring: number) => {
    return {type: UPDATE_ITEM, item: {...item, fixed, recurring}};
};
