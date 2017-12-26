import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import * as Actions from '../actions';
import {State} from '../models/state';
import {ContactForm} from '../components/contact/form';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

interface Props extends RouteComponentProps<{}>  {
    actions: typeof Actions;
    state: State;
}

class Container extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);
    }

    public componentWillMount() {
        this.props.actions.indexDefinitions();
    }

    public render() {
        const onSubmitAction = (forename: string, surname: string, email: string, phone: string) => {
            this.props.actions.sendQuote(this.props.state.quote, {forename, surname, email, phone});
        };

        return (
            <Wrapper>
                <ContactForm onSubmit={onSubmitAction}/>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state: State) => ({
    state
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const SendContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
