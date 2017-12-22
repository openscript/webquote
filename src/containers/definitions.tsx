import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import {State} from '../models/state';

interface Props {
    actions: typeof Actions;
    state: State;
}

class Container extends React.Component<Props, {}> {
    public componentWillMount() {
        this.props.actions.indexDefinitions();
    }

    public render() {
        return (
            <div>
                Hi
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
    state
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export const DefinitionsContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
