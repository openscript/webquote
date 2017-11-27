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
            type: {discriminator: 'CheckboxItem', value: 80, label: 'HTTPS'}
        }]
    },{
        id: 'infrastructure',
        title: 'Infrastructure',
        description: 'To bring a website online, infrastructure like servers or a domain name is needed.',
        items: [{
            id: 'hosting',
            title: 'Hosting',
            description: 'This server contains your website and delivers it to your visitors.',
            type: {discriminator: 'RadioButtonsItem', id: 'hosting', options: [
                {id: 'switzerland', value: 30, label: 'Hosting in Switzerland'},
                {id: 'europe', value: 20, label: 'Hosting in Europe'}
            ]}
        }]
    }, {
        id: 'other',
        title: 'Other',
        description: 'More tasks and options to create your website.',
        items: [{
            id: 'orderFee',
            title: 'Order fee',
            description: 'To pay the infrastructure, get the project up and running some time needs to be invested. ' +
                         'This fee covers this expenses.',
            type: {discriminator: 'CheckboxItem', value: 200, label: 'Order fee', checked: true, disabled: true}
        }]
    }]
};
