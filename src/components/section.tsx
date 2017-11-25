import * as React from 'react';
import {Total} from "./total";
import {Slider} from "material-ui";

interface Props {}

interface State {
    sliderValue: number;
}

export class Section extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        const initialState: State = {
            sliderValue: 0,
        };
        this.state = initialState;

        this.onSliderChange = this.onSliderChange.bind(this);
    }

    public onSliderChange(event: object, newValue: number) {
        this.setState({sliderValue: newValue});
    }

    public render() {
        return (
            <div>
                <Slider onChange={this.onSliderChange}/>
                <Total value={this.state.sliderValue} />
            </div>
        );
    }
}