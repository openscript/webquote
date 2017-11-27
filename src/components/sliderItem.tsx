import {Slider} from 'material-ui';
import * as React from 'react';

interface Props {
    value: number;
    minimum: number;
    maximum: number;
    step: number;
    onTotalChange: (newTotal: number) => void;
}

export class SliderItem extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

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
                />
            </div>
        );
    }

    private onChange(event: React.MouseEvent<{}>, value: number) {
        this.props.onTotalChange(this.props.value * value);
    }
}
