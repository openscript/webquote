import * as React from 'react';
import {connect} from 'react-redux';
import {Section} from '../components/section';
import {State} from '../models/state';
import {ItemsList} from '../components/itemsList';

interface Props {
    state: State;
}

export class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                {this.props.state.sections.map((s) => {
                    return (
                        <Section
                            key={s.id}
                            title={s.title}
                            description={s.description}
                            updateSection={this.updateFromSection}
                        >
                            <ItemsList />
                        </Section>
                    );
                })}
            </div>
        );
    }

    private updateFromSection(value: number): void {
        alert('updateFromSection');
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

export const SectionsContainer = connect(mapStateToProps)(Container);
