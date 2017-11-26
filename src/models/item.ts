export interface SliderItem {
    discriminator: 'SliderItem';
    minimum: number;
    maximum: number;
    steps: number;
    value: number;
}

export interface CheckboxItem {
    discriminator: 'CheckboxItem';
    value: number;
}

export interface NoneItem {
    discriminator: 'NoneItem';
}

export interface Item {
    id: string;
    title: string;
    description: string;
    total?: number;
    type: NoneItem | SliderItem | CheckboxItem;
}

export const defaultItem: Item = {
    id: '',
    title: '',
    description: '',
    total: 0,
    type: {discriminator: 'NoneItem'}
};
