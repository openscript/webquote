import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {Section} from '../components/section/section';
import {Total} from '../components/total';
import {calculateFixedSectionTotal, calculateRecurringSectionTotal} from '../models/item';
import {State} from '../models/state';
import {ItemsContainer} from './items';

interface Params {
    template: string;
}

interface Props extends RouteComponentProps<Params> {
    state: State;
    actions: typeof Actions;
}

class Container extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    public componentWillMount() {
        this.props.actions.setQuoteFromDefinitionName(this.props.match.params.template);
    }

    public render() {
        return (
            <div>
                {this.props.state.quote.sections.map((s) => {
                    return (
                        <Section
                            key={s.id}
                            title={s.title}
                            description={s.description}
                            headerLeftElement={
                                <Total
                                    fixed={calculateFixedSectionTotal(s.items)}
                                    recurring={calculateRecurringSectionTotal(s.items)}
                                />
                            }
                        >
                            <ItemsContainer items={s.items} />
                        </Section>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const QuoteContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
