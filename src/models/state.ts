import {Section} from './section';

export interface State {
    sections: Section[];
}

export const defaultState: State = {
    sections: []
};
