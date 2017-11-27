import {AppBar, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {getMuiTheme, lightBaseTheme, MuiThemeProvider} from 'material-ui/styles';
import * as React from 'react';
import {connect} from 'react-redux';
import {default as styled, injectGlobal} from 'styled-components';
import {calculateTotal, Section} from '../models/section';
import {State} from '../models/state';
import {SectionsContainer} from './sections';
import {Total} from '../components/total';

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

interface Props {
    state: State;
}

export class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <ContainerWrapper>
                    <header>
                        <AppBar
                            title='Webquote'
                            showMenuIconButton={false}
                            iconElementRight={<Total value={calculateTotal(this.props.state.sections)} />}
                            iconStyleRight={{margin: 0, lineHeight: '64px'}}
                        />

                    </header>
                    <MainWrapper>
                        <SectionsContainer />
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
}

const mapStateToProps = (state: State) => ({
    state,
});

export const App = connect(mapStateToProps)(Container);
