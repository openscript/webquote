import {UPDATE_ITEM} from '../constants/actions';
import {Item} from '../models/item';

export const updateItem = (item: Item, newTotal: number) => {
    return {type: UPDATE_ITEM, item};
};