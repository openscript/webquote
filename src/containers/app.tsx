import * as React from 'react';
import {getMuiTheme, lightBaseTheme, MuiThemeProvider} from "material-ui/styles";
import {AppBar} from "material-ui";
import {injectGlobal} from "styled-components";
import {Section} from "../components/section";

injectGlobal`
  body {
    margin: 0;
  }
`;

interface Props {
}

const Container: React.SFC<Props> = props => {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <AppBar title='Webquote' showMenuIconButton={false} />
                <Section />
            </div>
        </MuiThemeProvider>
    );
};

export const App = Container;