export interface SliderItem {
    discriminator: 'SliderItem';
    state?: {
        selectedStep: number;
    };
    minimum: number;
    maximum: number;
    step: number;
    fixed?: number;
    recurring?: number;
}

export interface CheckboxItem {
    discriminator: 'CheckboxItem';
    state?: {
        checked: boolean;
    };
    disabled?: boolean;
    checked?: boolean;
    label: string;
    fixed?: number;
    recurring?: number;
}

export interface CheckboxesItem {
    discriminator: 'CheckboxesItem';
    state?: {
        checked: string[];
    };
    options: Array<{
        id: string;
        disabled?: boolean;
        checked?: boolean;
        label: string;
        fixed?: number;
        recurring?: number;
    }>;
}

export interface RadioButtonsItem {
    discriminator: 'RadioButtonsItem';
    state?: {
        selected: string;
    };
    id: string;
    options: Array<{
        id: string;
        label: string;
        fixed?: number;
        recurring?: number;
    }>;
}

export interface NoneItem {
    discriminator: 'NoneItem';
    state?: null;
}

export interface Item {
    id: string;
    title: string;
    description: string;
    fixed?: number;
    recurring?: number;
    type: NoneItem | SliderItem | CheckboxItem | CheckboxesItem | RadioButtonsItem;
}

export const defaultItem: Item = {
    id: '',
    title: '',
    description: '',
    fixed: 0,
    recurring: 0,
    type: {discriminator: 'NoneItem', state: null}
};

export const calculateFixedSectionTotal = (items: Item[]) => {
    return items.reduce((sum, item) => item.fixed ? sum + item.fixed : sum, 0);
};

export const calculateRecurringSectionTotal = (items: Item[]) => {
    return items.reduce((sum, item) => item.recurring ? sum + item.recurring : sum, 0);
};
