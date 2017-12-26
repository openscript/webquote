import * as firebase from 'firebase';
import {Dispatch} from 'react-redux';
import slugify from 'slugify';
import {SEND_QUOTE, SET_QUOTE_FROM_DEFINITION, UPDATE_ITEM} from '../constants/actions';
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

export const updateItem = (item: Item, fixed: number, recurring: number) => {
    return {type: UPDATE_ITEM, item: {...item, fixed, recurring}};
};

const sendQuoteSuccess = () => {
    alert('holycow');
    return {type: SEND_QUOTE};
};

export const sendQuote = (quote: Quote, contact: Contact) => {
    return (dispatch: Dispatch<State>, getState: () => State, getFirebase: () => firebase.app.App) => {
        const quotesRef = getFirebase().database().ref('quotes').push();
        quotesRef.set({contact, quote}, sendQuoteSuccess);
    };
};
