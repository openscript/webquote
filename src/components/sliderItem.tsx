import {Slider} from 'material-ui';
import * as React from 'react';

interface Props {
    value: number;
    minimum: number;
    maximum: number;
    step: number;
    onTotalChange: (newTotal: number) => void;
}

interface State {
    currentValue: number;
}

export class SliderItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            currentValue: this.props.minimum
        };

        this.props.onTotalChange(this.props.value * this.props.minimum);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <Slider
                    min={this.props.minimum}
                    max={this.props.maximum}
                    step={this.props.step}
                    onChange={this.onChange}
                    sliderStyle={{margin: '1rem 0'}}
                />
                <span>{`You have selected ${this.state.currentValue}.`}</span>
            </div>
        );
    }

    private onChange(event: React.MouseEvent<{}>, value: number) {
        this.setState({currentValue: value});
        this.props.onTotalChange(this.props.value * value);
    }
}
