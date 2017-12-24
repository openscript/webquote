import * as types from '../constants/actions';
import {defaultEnvironment, Environment} from '../models/environment';

export const environment = (state: Environment = defaultEnvironment, action: any) => {
    switch (action.type) {
        case types.UPDATE_ENVIRONMENT:
            return action.environment ? {...state, ...action.environment} : state;
        default:
            return state;
    }
};
