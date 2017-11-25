import {AppBar} from 'material-ui';
import {getMuiTheme, lightBaseTheme, MuiThemeProvider} from 'material-ui/styles';
import * as React from 'react';
import {connect} from 'react-redux';
import {injectGlobal} from 'styled-components';
import {Section} from '../components/section';
import {State} from '../models/state';

/* tslint:disable:no-unused-expression */
injectGlobal`
  body {
    margin: 0;
  }
`;

interface Props {
    state: State;
}

export class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar title='Webquote' showMenuIconButton={false} />
                    <Section />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

export const App = connect(mapStateToProps)(Container);
