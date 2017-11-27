import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import * as Actions from '../actions';
import {CheckBoxItem} from '../components/checkboxItem';
import {Item} from '../components/item';
import {CheckboxItem, Item as ItemModel} from '../models/item';
import {State} from '../models/state';
import {SliderItem} from '../components/sliderItem';

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
    actions: typeof Actions;
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
                            >
                                <ActionWrapper>
                                    {this.createActionComponent(i)}
                                </ActionWrapper>
                            </Item>
                        </li>
                    );
                })}
            </ContainerWrapper>
        );
    }

    private createActionComponent(item: ItemModel) {
        switch (item.type.discriminator) {
            case 'CheckboxItem': {
                return (<CheckBoxItem value={item.type.value} onTotalChange={this.createActionCallback(item)}/>);
            }
            case 'SliderItem': {
                return (<SliderItem {...item.type} onTotalChange={this.createActionCallback(item)}/>);
            }
            default: {
                return (<span>Not implemented.</span>);
            }
        }
    }

    private createActionCallback(item: ItemModel) {
        return (newTotal: number) => {
            this.props.actions.updateItem(item, newTotal);
        };
    }
}

const mapStateToProps = (state: State) => ({
    state,
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
