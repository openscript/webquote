import * as React from 'react';
import {Total} from "./total";
import {Card, CardHeader, CardText, Slider} from 'material-ui';

interface Props {
    title: string;
    description: string;
    updateSection: (value: number) => void;
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
            <Card>
                <CardHeader title={this.props.title} />
                <CardText>
                    <Slider onChange={this.onSliderChange}/>
                    <Total value={this.state.sliderValue} />
                </CardText>
            </Card>
        );
    }
}
