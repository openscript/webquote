import {Section} from './section';

export interface Definition {
    name: string;
    sections: Section[];
}

export const defaultDefinition: Definition = {
    name: '',
    sections: []
};
