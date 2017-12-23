import {Definition} from './definition';
import {defaultQuote, Quote} from './quote';

export interface State {
    quote: Quote;
    definitions: Definition[];
}

export const defaultState: State = {
    quote: defaultQuote,
    definitions: []
};
