import {calculateFixedSectionTotal, calculateRecurringSectionTotal, Item} from './item';

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

export const calculateFixedTotal = (sections: Section[]) => {
    return sections.reduce((sum, section) => sum + calculateFixedSectionTotal(section.items), 0);
};

export const calculateRecurringTotal = (sections: Section[]) => {
    return sections.reduce((sum, section) => sum + calculateRecurringSectionTotal(section.items), 0);
};
