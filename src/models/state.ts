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
            'visitors can interact with. Select the amount of such pages.',
            type: {discriminator: 'SliderItem', value: 50, minimum: 1, maximum: 50, step: 1}
        }]
    }, {
        id: 'compatibility',
        title: 'Compatibility',
        description: 'Define the compatibility of the website.',
        items: [{
            id: 'secureConnection',
            title: 'Secure Communication (HTTPS)',
            description: 'Should the connection between the visitor and your website be encrypted? This also helps ' +
            'to optimize your search engine rank.',
            type: {discriminator: 'CheckboxItem', fixed: 80, label: 'HTTPS'}
        }]
    }, {
        id: 'infrastructure',
        title: 'Infrastructure',
        description: 'To bring a website online, infrastructure like servers or a domain name is needed.',
        items: [{
            id: 'hosting',
            title: 'Hosting',
            description: 'This server contains your website and delivers it to your visitors.',
            type: {
                discriminator: 'RadioButtonsItem', id: 'hosting', options: [
                    {id: 'switzerland', fixed: 50, recurring: 150, label: 'Hosting in Switzerland'},
                    {id: 'europe', fixed: 50, recurring: 80, label: 'Hosting in Europe'}
                ]
            }
        }]
    }, {
        id: 'other',
        title: 'Other',
        description: 'More tasks and options to create your website.',
        items: [{
            id: 'orderFee',
            title: 'Order fee',
            description: 'To pay the infrastructure and get the project up and running some time needs to be ' +
            'invested. This fee covers this expenses.',
            type: {discriminator: 'CheckboxItem', fixed: 200, label: 'Order fee', checked: true, disabled: true}
        }, {
            id: 'maintenanceFee',
            title: 'Maintenance fee',
            description: 'It\'s important that the infrastructure is up to date and available. This fee covers the ' +
            'time to make sure everything is working properly.',
            type: {
                discriminator: 'CheckboxItem',
                recurring: 200,
                label: 'Maintenance fee',
                checked: true,
                disabled: true
            }
        }]
    }]
};
