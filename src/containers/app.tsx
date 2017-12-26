import {AppBar, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
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
import {DefinitionsContainer} from './definitions';
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

interface Props extends RouteComponentProps<{}> {
    state: State;
    actions: typeof Actions;
}

class Container extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);

        this.navigateToHome = this.navigateToHome.bind(this);
    }

    public render() {
        const rightElements = (
            <div>
                {this.props.state.quote !== defaultQuote
                    ? <Total
                        fixed={calculateFixedTotal(this.props.state.quote.sections)}
                        recurring={calculateRecurringTotal(this.props.state.quote.sections)}
                    /> : null}
            </div>
        );

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <ContainerWrapper>
                    <header>
                        <AppBar
                            title='Webquote'
                            onTitleTouchTap={this.navigateToHome}
                            showMenuIconButton={false}
                            iconElementRight={rightElements}
                            titleStyle={{cursor: 'pointer'}}
                            iconStyleRight={{margin: 0, lineHeight: '64px', color: 'white'}}
                        />

                    </header>
                    <MainWrapper>
                        <Route
                            path={'/'}
                            exact={true}
                            component={DefinitionsContainer}
                        />
                        <Route
                            path={'/quote/:method/:template'}
                            exact={true}
                            component={QuoteContainer}
                        />
                        <Route
                            path={'/quote/:method/:template/send'}
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

    private navigateToHome() {
        this.props.history.push('/');
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<typeof Actions>(Actions, dispatch)
});

export const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
