import * as types from '../constants/actions';
import {Contact} from '../models/contact';

export const contact = (state: Contact|undefined, action: any) => {
    switch (action.type) {
        case types.SET_CONTACT:
            return action.contact ? {...action.contact} : state;
        default:
            return state;
    }
};
