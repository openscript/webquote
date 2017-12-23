import {SET_QUOTE_FROM_DEFINITION} from '../constants/actions';
import {Definition} from '../models/definition';

export const setQuoteFromDefinition = (definition: Definition) => {
    return {type: SET_QUOTE_FROM_DEFINITION, definition};
};
