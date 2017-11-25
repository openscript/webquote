import {Section} from './section';

export interface State {
    sections: Section[];
}

export const defaultState: State = {
    sections: [{
        id: 'basis',
        title: 'Basis',
        description: 'Define the foundation of the website.',
        items: [{
            id: 'staticPages',
            title: 'Static pages',
            description: 'A static page is a page, which doesn\'t automatically adapt content or ' +
                         'visitors can interact with. Select the amount of such pages.'
        }]
    }, {
        id: 'compatibility',
        title: 'Compatibility',
        description: 'Define the compatibility of the website.',
        items: []
    }]
};
