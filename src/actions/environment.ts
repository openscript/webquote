import {UPDATE_ENVIRONMENT} from '../constants/actions';
import {Environment} from '../models/environment';

export const updateEnvironment = (environment: Environment) => {
    return {type: UPDATE_ENVIRONMENT, environment};
};
