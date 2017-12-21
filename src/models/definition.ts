import {Section} from '../components/section';

export interface Definition {
    name: string;
    definition: {
        sections: Section[]
    };
}

export const defaultDefinition: Definition = {
    name: '',
    definition: {
        sections: []
    }
};
