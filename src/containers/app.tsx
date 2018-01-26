import {AppBar, FlatButton, RaisedButton, Toolbar, ToolbarGroup} from 'material-ui';
import {getMuiTheme, lightBaseTheme, MuiThemeProvider} from 'material-ui/styles';
import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {Route, RouteComponentProps, withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {default as styled, injectGlobal} from 'styled-components';
import * as Actions from '../actions';
import {Total} from '../components/total';
import {defaultQuote} from '../models/quote';
import {calculateFixedTotal, calculateRecurringTotal} from '../models/section';
import {State} from '../models/state';
import {DashboardContainer} from './dashboard';
import {QuoteContainer} from './quote';
import {SendContainer} from './send';

/* tslint:disable:no-unused-expression */
injectGlobal`
  *:not(input) {
    user-select: none;
  }

  html {
    height: 100%;
    font-family: sans-serif;
  }

  body {
    display: flex;
    margin: 0;
    min-height: 100%;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 1rem;
`;

const AppBarElementsWrapper = styled.div`
  display: flex;
  line-height: 36px;
`;

interface Props extends RouteComponentProps<{}> {
    state: State;
    actions: typeof Actions;
}

class Container extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        this.navigateToHome = this.navigateToHome.bind(this);
        this.navigateToCurrent = this.navigateToCurrent.bind(this);
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <ContainerWrapper>
                    <header>
                        <AppBar
                            title='Webquote'
                            onTitleClick={this.navigateToHome}
                            showMenuIconButton={false}
                            iconElementRight={this.createRightAppBarElements()}
                            titleStyle={{cursor: 'pointer'}}
                            iconStyleRight={{
                                margin: 0,
                                lineHeight: '64px',
                                color: 'white',
                                display: 'flex',
                                alignSelf: 'center'
                            }}
                        />

                    </header>
                    <MainWrapper>
                        <Route
                            path={'/'}
                            exact={true}
                            component={DashboardContainer}
                        />
                        <Route
                            path={'/quote/:method/:target?'}
                            exact={true}
                            component={QuoteContainer}
                        />
                        <Route
                            path={'/quote/:method/:target/send'}
                            component={SendContainer}
                        />
                    </MainWrapper>
                    <footer>
                        <Toolbar>
                            <ToolbarGroup>
                                <FlatButton label='openscript.ch' href='https://openscript.ch' style={{marginLeft: 0}}/>
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <FlatButton
                                    label='GitHub'
                                    href='https://github.com/openscript/webquote'
                                    style={{marginRight: 0}}
                                />
                            </ToolbarGroup>
                        </Toolbar>
                    </footer>
                </ContainerWrapper>
            </MuiThemeProvider>
        );
    }

    private createRightAppBarElements() {
        if (this.props.state.quote) {
            return (
                <AppBarElementsWrapper>
                    <RaisedButton
                        label={'Continue editing'}
                        primary={true}
                        style={{marginRight: '1rem'}}
                        onClick={this.navigateToCurrent}
                    />
                    <Total
                        fixed={calculateFixedTotal(this.props.state.quote.sections)}
                        recurring={calculateRecurringTotal(this.props.state.quote.sections)}
                    />
                </AppBarElementsWrapper>
            );
        }
        return undefined;
    }

    private navigateToHome() {
        this.props.history.push('/');
    }

    private navigateToCurrent() {
        this.props.history.push('/quote/current');
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
