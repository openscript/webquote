import * as React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Item} from '../components/item';
import {CheckboxItem, Item as ItemModel} from '../models/item';
import {State} from '../models/state';
import {Checkbox} from 'material-ui';

const ContainerWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ActionWrapper = styled.div`
  margin-top: 0.5rem;
`;

interface Props {
    state: State;
    items: ItemModel[];
}

export class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <ContainerWrapper>
                {this.props.items.map((i) => {
                    return (
                        <li key={i.id}>
                            <Item
                                title={i.title}
                                description={i.description}
                                updateItem={this.updateFromItem}
                            >
                                <ActionWrapper>
                                    {this.createActionElement(i.type)}
                                </ActionWrapper>
                            </Item>
                        </li>
                    );
                })}
            </ContainerWrapper>
        );
    }

    private createActionElement(type: ItemModel['type']) {
        switch (type.discriminator) {
            case 'CheckboxItem': {
                return (<Checkbox label={'test'} />);
            }
            default: {
                return (<span>Not implemented.</span>);
            }
        }
    }

    private updateFromItem(value: number): void {
        alert('updateFromItem');
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

export const ItemsContainer = connect(mapStateToProps)(Container);
