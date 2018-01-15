import {CircularProgress} from 'material-ui';
import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {bindActionCreators} from 'redux';
import slugify from 'slugify';
import styled from 'styled-components';
import * as Actions from '../actions';
import {DefinitionList} from '../components/definition/list';
import {QuoteList} from '../components/quote/list';
import {State} from '../models/state';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LoadingIndicator = styled(CircularProgress)`
  align-self: center;
`;

interface Props extends RouteComponentProps<{}>  {
    actions: typeof Actions;
    state: State;
}

class Container extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

        this.isReady = this.isReady.bind(this);
        this.handleDefinitionSelect = this.handleDefinitionSelect.bind(this);
        this.handleSavedQuoteSelect = this.handleSavedQuoteSelect.bind(this);
    }

    public componentWillMount() {
        this.props.actions.indexDefinitions();
    }

    public render() {
        let loadedDefinitions = <LoadingIndicator />;

        if (this.isReady()) {
            loadedDefinitions = (
                <DefinitionList
                    definitions={this.props.state.definitions}
                    onDefinitionSelect={this.handleDefinitionSelect}
                />
            );
        }

        return (
            <Wrapper>
                <h2>Definition list</h2>
                {loadedDefinitions}
                <h2>Saved quotes list</h2>
                <QuoteList
                    quotes={this.props.state.savedQuotes}
                    onQuoteSelect={this.handleSavedQuoteSelect}
                />
            </Wrapper>
        );
    }

    private isReady() {
        return this.props.state.definitions.length > 0;
    }

    private handleDefinitionSelect(name: string) {
        this.props.history.push(`${this.props.match.url}quote/from-definition/${slugify(name.toLowerCase())}`);
    }

    private handleSavedQuoteSelect(title: string) {
    }
}

const mapStateToProps = (state: State) => ({
    state
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const DefinitionsContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
