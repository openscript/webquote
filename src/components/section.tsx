import {Card, CardActions, CardHeader, CardText} from 'material-ui';
import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

const Description = styled.span`
  font-weight: bold;
`;

interface Props {
    title: string;
    description: string;
    total?: number;
    children?: ReactNode;
}

interface State {
    sliderValue: number;
}

export class Section extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            sliderValue: 0
        };

        this.onSliderChange = this.onSliderChange.bind(this);
    }

    public onSliderChange(event: object, newValue: number) {
        this.setState({sliderValue: newValue});
    }

    public render() {
        return (
            <Card style={{marginBottom: '1rem'}} initiallyExpanded={true}>
                <CardHeader
                    title={this.props.title}
                    titleStyle={{fontSize: '1.3em'}}
                    style={{background: '#f3f3f3'}}
                    showExpandableButton={true}
                    actAsExpander={true}
                />
                <CardText expandable={true}>
                    <Description>{this.props.description}</Description>
                    {this.props.children ? this.props.children : null}
                    {this.props.total ? this.props.total : 0}
                </CardText>
            </Card>
        );
    }
}
