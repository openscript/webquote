import {Slider} from 'material-ui';
import * as React from 'react';

interface Props {
    fixed?: number;
    recurring?: number;
    minimum: number;
    maximum: number;
    step: number;
    state?: State;
    onTotalChange: (fixed: number, recurring: number, state: State) => void;
}

interface State {
    selectedStep: number;
}

export class SliderItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = this.props.state ? this.props.state : {
            selectedStep: this.props.minimum
        };

        this.updateTotal(this.state.selectedStep);
        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <Slider
                    min={this.props.minimum}
                    max={this.props.maximum}
                    defaultValue={this.state.selectedStep}
                    step={this.props.step}
                    onChange={this.onChange}
                    sliderStyle={{margin: '1rem 0'}}
                />
                <span>{`You have selected ${this.state.selectedStep}.`}</span>
            </div>
        );
    }

    private updateTotal(value: number) {
        const fixedTotal = this.props.fixed ? this.props.fixed * value : 0;
        const recurringTotal = this.props.recurring ? this.props.recurring * value : 0;
        this.props.onTotalChange(fixedTotal, recurringTotal, {selectedStep: value});
    }

    private onChange(event: React.MouseEvent<{}>, value: number) {
        this.setState({selectedStep: value});
        this.updateTotal(value);
    }
}
