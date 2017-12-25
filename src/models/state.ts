import {Contact} from './contact';
import {Definition} from './definition';
import {defaultEnvironment, Environment} from './environment';
import {defaultQuote, Quote} from './quote';

export interface State {
    environment: Environment;
    quote: Quote;
    contact?: Contact;
    definitions: Definition[];
}

export const defaultState: State = {
    environment: defaultEnvironment,
    quote: defaultQuote,
    definitions: []
};
