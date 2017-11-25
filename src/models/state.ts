import {Section} from './section';

export interface State {
    sections: Section[];
}

export const defaultState: State = {
    sections: [
        {id: 'first', title: 'Title', description: 'Description', items: []}
    ]
};
