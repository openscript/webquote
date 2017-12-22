import {Definition} from './definition';
import {Section} from './section';

export interface State {
    sections: Section[];
    defintions: Definition[];
}

export const defaultState: State = {
    sections: [],
    defintions: []
};
