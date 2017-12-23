import {Section} from './section';

export interface Quote {
    title: string;
    sections: Section[];
}

export const defaultQuote: Quote = {
    title: '',
    sections: []
};
