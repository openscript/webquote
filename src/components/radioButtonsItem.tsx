import {RadioButton, RadioButtonGroup} from 'material-ui';
import * as React from 'react';

interface Props {
    id: string;
    options: Array<{
        id: string,
        label: string,
        fixed?: number,
        recurring?: number
    }>;
    state?: State;
    onTotalChange: (fixed?: number, recurring?: number, state?: State) => void;
}

interface State {
    selected: string;
}

export class RadioButtonsItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = this.props.state ? this.props.state : {selected: ''};

        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <RadioButtonGroup name={this.props.id} defaultSelected={this.state.selected} onChange={this.onChange}>
                    {this.props.options.map((o) => {
                        return (
                            <RadioButton key={o.id} value={o.id} label={o.label}/>
                        );
                    })}
                </RadioButtonGroup>
            </div>
        );
    }

    private onChange(event: React.FormEvent<{}>, selected: string) {
        const target = this.props.options.find((option) => option.id === selected);
        if (target) {
            const newState = {selected: target.id};
            this.setState(newState);
            this.props.onTotalChange(target.fixed, target.recurring, newState);
        }
    }
}
