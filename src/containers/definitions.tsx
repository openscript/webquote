import * as React from 'react';
import {connect} from 'react-redux';
import {State} from '../models/state';

interface Props {
    state: State;
}

export class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                hello
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

export const DefinitionsContainer = connect(mapStateToProps)(Container);
