import * as firebase from 'firebase';
import {Dispatch} from 'react-redux';
import slugify from 'slugify';
import {
    SAVE_QUOTE, SEND_QUOTE, SET_QUOTE_FROM_DEFINITION, SET_QUOTE_FROM_SAVED_QUOTE, UPDATE_ITEM
} from '../constants/actions';
import {Contact} from '../models/contact';
import {Definition} from '../models/definition';
import {Item} from '../models/item';
import {Quote} from '../models/quote';
import {State} from '../models/state';
import {indexDefinitions} from './definition';

export const setQuoteFromDefinition = (definition: Definition) => {
    return {type: SET_QUOTE_FROM_DEFINITION, definition};
};

export const setQuoteFromDefinitionName = (name: string) => {
    return (dispatch: Dispatch<State>, getState: () => State) => {
        const findDefinition = () => {
            const definition = getState().definitions.find(
                (d) => slugify(d.name.toLowerCase()) === name
            );

            if (definition) {
                dispatch(setQuoteFromDefinition(definition));
            }
        };

        if (!getState().environment.definitionLoaded) {
            dispatch(indexDefinitions()).then(() => findDefinition());
        } else {
            findDefinition();
        }
    };
};

export const setQuoteFromSavedQuote = (quote: Quote) => {
    return {type: SET_QUOTE_FROM_SAVED_QUOTE, quote};
};

export const setQuoteFromSavedQuoteTitle = (title: string) => {
    return (dispatch: Dispatch<State>, getState: () => State) => {
        const quote = getState().savedQuotes.find(
            (q) => slugify(q.title.toLowerCase()) === title
        );

        if (quote) {
            dispatch(setQuoteFromSavedQuote(quote));
        }
    };
};

export const updateItem = (item: Item, fixed: number, recurring: number, state?: typeof item.type.state) => {
    const type = {...item.type, ...{state}};
    return {type: UPDATE_ITEM, item: {...item, fixed, recurring, type}};
};

const sendQuoteSuccess = () => {
    return {type: SEND_QUOTE};
};

export const sendQuote = (quote: Quote, contact: Contact) => {
    return (dispatch: Dispatch<State>, getState: () => State, getFirebase: () => firebase.app.App) => {
        const quotesRef = getFirebase().database().ref('quotes').push();
        quotesRef.set({contact, quote}, sendQuoteSuccess);
    };
};

export const saveQuote = (quote: Quote) => {
    return {type: SAVE_QUOTE, quote};
};
