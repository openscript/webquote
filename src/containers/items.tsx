import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import * as Actions from '../actions';
import {CheckBoxesItem} from '../components/checkboxesItem';
import {CheckBoxItem} from '../components/checkboxItem';
import {Item} from '../components/item';
import {RadioButtonsItem} from '../components/radioButtonsItem';
import {SliderItem} from '../components/sliderItem';
import {CheckboxItem, Item as ItemModel} from '../models/item';
import {State} from '../models/state';

const ContainerWrapper = styled.ul`
  list-style: none;
  margin: 2rem 0 0 0;
  padding: 0;
`;

const ItemWrapper = styled.li`
  margin: 2rem 0;
`;

const ActionWrapper = styled.div`
  margin-top: 0.5rem;
`;

interface Props {
    state: State;
    actions: typeof Actions;
    items: ItemModel[];
}

class Container extends React.Component<Props, {}> {
    public render() {
        return (
            <ContainerWrapper>
                {this.props.items.map((i) => {
                    return (
                        <ItemWrapper key={i.id}>
                            <Item
                                title={i.title}
                                description={i.description}
                            >
                                <ActionWrapper>
                                    {this.createActionComponent(i)}
                                </ActionWrapper>
                            </Item>
                        </ItemWrapper>
                    );
                })}
            </ContainerWrapper>
        );
    }

    private createActionComponent(item: ItemModel) {
        switch (item.type.discriminator) {
            case 'CheckboxItem': {
                return (<CheckBoxItem {...item.type} onTotalChange={this.createActionCallback(item)}/>);
            }
            case 'CheckboxesItem': {
                return (<CheckBoxesItem {...item.type} onTotalChange={this.createActionCallback(item)}/>);
            }
            case 'SliderItem': {
                return (<SliderItem {...item.type} onTotalChange={this.createActionCallback(item)}/>);
            }
            case 'RadioButtonsItem': {
                return (<RadioButtonsItem {...item.type} onTotalChange={this.createActionCallback(item)}/>);
            }
            default: {
                return (<span>Not implemented.</span>);
            }
        }
    }

    private createActionCallback(item: ItemModel) {
        return (fixed?: number, recurring?: number, state?: typeof item.type.state) => {
            const fixedValue = fixed ? fixed : 0;
            const recurringValue = recurring ? recurring : 0;
            this.props.actions.updateItem(item, fixedValue, recurringValue, state);
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
