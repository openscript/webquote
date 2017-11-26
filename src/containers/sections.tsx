import * as React from 'react';
import {connect} from 'react-redux';
import {Section} from '../components/section';
import {Item} from '../models/item';
import {State} from '../models/state';
import {ItemsContainer} from './items';

interface Props {
    state: State;
}

export class Container extends React.Component<Props, {}> {
    private static calculateSectionTotal(items: Item[]) {
        return items.reduce((sum, item) => item.total ? sum + item.total : sum, 0);
    }

    public render() {
        return (
            <div>
                {this.props.state.sections.map((s) => {
                    return (
                        <Section
                            key={s.id}
                            title={s.title}
                            description={s.description}
                            total={Container.calculateSectionTotal(s.items)}
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
