import * as React from 'react';
import {connect} from 'react-redux';
import {Section} from '../components/section';
import {calculateFixedSectionTotal, calculateRecurringSectionTotal} from '../models/item';
import {State} from '../models/state';
import {ItemsContainer} from './items';

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
                            fixedTotal={calculateFixedSectionTotal(s.items)}
                            recurringTotal={calculateRecurringSectionTotal(s.items)}
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

export const SectionsContainer = connect(mapStateToProps)(Container);
