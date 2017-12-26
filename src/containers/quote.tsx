import {BottomNavigation, BottomNavigationItem, CircularProgress} from 'material-ui';
import SaveIcon from 'material-ui/svg-icons/content/save';
import SendIcon from 'material-ui/svg-icons/content/send';
import * as React from 'react';
import {CSSProperties, ReactNode} from 'react';
import {connect, Dispatch} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import * as Actions from '../actions';
import {Section} from '../components/section/section';
import {Total} from '../components/total';
import {calculateFixedSectionTotal, calculateRecurringSectionTotal} from '../models/item';
import {defaultQuote} from '../models/quote';
import {State} from '../models/state';
import {ItemsContainer} from './items';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LoadingIndicator = styled(CircularProgress)`
  align-self: center;
`;

const StickyActionBar: CSSProperties = {
    position: 'fixed',
    zIndex: 10,
    left: 0,
    right: 0,
    bottom: 0
};

const ActionBarWrapper = styled.div`
  box-shadow: 0 -5px 10px 0 #FFF;
`;

interface Params {
    template: string;
}

interface Props extends RouteComponentProps<Params> {
    state: State;
    actions: typeof Actions;
}

interface ContainerState {
    isActionBarSticky: boolean;
}

class Container extends React.Component<Props, ContainerState> {
    private isTicking: boolean;

    constructor(props: Props) {
        super(props);

        this.state = {
            isActionBarSticky: true,
        };

        this.isTicking = false;

        this.toggleStickyActionBar = this.toggleStickyActionBar.bind(this);
    }

    public componentWillMount() {
        this.props.actions.setQuoteFromDefinitionName(this.props.match.params.template);
    }

    public componentDidMount() {
        window.addEventListener('scroll', (e) => {
            if (!this.isTicking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY < document.body.offsetHeight - window.innerHeight - 75) {
                        this.toggleStickyActionBar(true);
                    } else {
                        this.toggleStickyActionBar(false);
                    }
                    this.isTicking = false;
                });
                this.isTicking = true;
            }
        });
    }

    public render() {
        let loadedQuote: ReactNode = <LoadingIndicator />;
        let actionBar: ReactNode = null;

        if (this.props.state.quote !== defaultQuote) {
            loadedQuote = this.props.state.quote.sections.map((s) => {
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
            });
            actionBar = (
                <ActionBarWrapper style={this.state.isActionBarSticky ? StickyActionBar : undefined}>
                    <BottomNavigation >
                        <BottomNavigationItem icon={<SaveIcon/>} label={'Save'}/>
                        <BottomNavigationItem icon={<SendIcon/>} label={'Send'}/>
                    </BottomNavigation>
                </ActionBarWrapper>
            );
        }

        return (
            <Wrapper style={this.state.isActionBarSticky ? {paddingBottom: '56px'} : undefined}>
                {loadedQuote}
                {actionBar}
            </Wrapper>
        );
    }

    private toggleStickyActionBar(current: boolean) {
        if (this.state.isActionBarSticky !== current) {
            this.setState({isActionBarSticky: current});
        }
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const QuoteContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
