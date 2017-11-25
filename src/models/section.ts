import {Item} from './item';

export interface Section {
    id: string;
    title: string;
    description: string;
    items: Item[];
}

export const defaultSection: Section = {
    id: '',
    title: '',
    description: '',
    items: [],
};
