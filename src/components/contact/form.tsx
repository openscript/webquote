import {RaisedButton, TextField} from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import * as React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 67%;
  margin-top: 1rem;

  & > * {
    flex-grow: 1;
    margin: 0 1rem;
  }
`;

const FormSubmitRow = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 67%;
  margin-top: 2rem;
`;

interface Props {
    onSubmit: (forename: string, surname: string, email: string, phone: string) => void;
}

interface State {
    forename: string;
    surname: string;
    email: string;
    phone: string;
}

export class ContactForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            forename: '',
            surname: '',
            email: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormRow>
                    <span>
                        Add your contact information and send us the quote you defined before. We will get in touch with
                        you as soon as possible!
                    </span>
                </FormRow>
                <FormRow>
                    <TextField
                        name={'forename'}
                        floatingLabelText={'Forename'}
                        onChange={this.handleChange}
                    />
                    <TextField
                        name={'surname'}
                        required={true}
                        floatingLabelText={'Surname'}
                        onChange={this.handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        type={'email'}
                        name={'email'}
                        floatingLabelText={'Email'}
                        onChange={this.handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        type={'tel'}
                        name={'phone'}
                        floatingLabelText={'Phone number'}
                        onChange={this.handleChange}
                    />
                </FormRow>
                <FormSubmitRow>
                    <RaisedButton
                        type={'submit'}
                        icon={<SendIcon/>}
                        label={'Send'}
                        primary={true}
                    />
                </FormSubmitRow>
            </Form>
        );
    }

    private handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.currentTarget;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: target.value
        });
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        this.props.onSubmit(this.state.forename, this.state.surname, this.state.email, this.state.phone);
        event.preventDefault();
    }
}
