export interface Contact {
    forename: string;
    surname?: string;
    email?: string;
    phone: string;
}

export const defaultContact: Contact = {
    forename: '',
    phone: ''
};
