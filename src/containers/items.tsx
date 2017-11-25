import * as React from 'react';
import {connect} from 'react-redux';
import {Item} from '../components/item';
import {Item as ItemModel} from '../models/item';
import {State} from '../models/state';
import styled from 'styled-components';

const ContainerWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
                            />
                        </li>
                    );
                })}
            </ContainerWrapper>
        );
    }

    private updateFromItem(value: number): void {
        alert('updateFromItem');
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

export const ItemsContainer = connect(mapStateToProps)(Container);
