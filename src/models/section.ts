import {calculateSectionTotal, Item} from './item';

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

export const calculateTotal = (sections: Section[]) => {
    return sections.reduce((sum, section) => sum + calculateSectionTotal(section.items), 0);
};
