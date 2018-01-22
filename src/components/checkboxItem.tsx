import {Checkbox} from 'material-ui';
import * as React from 'react';

interface Props {
    fixed?: number;
    recurring?: number;
    label: string;
    disabled?: boolean;
    checked?: boolean;
    state?: State;
    onTotalChange: (fixed?: number, recurring?: number, state?: State) => void;
}

interface State {
    checked: boolean;
}

export class CheckBoxItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = this.props.state ? this.props.state : {
            checked: this.props.checked ? this.props.checked : false
        };

        this.updateTotal(this.state.checked);
        this.onCheck = this.onCheck.bind(this);
    }

    public render() {
        const checkboxProps = {
            label: this.props.label,
            disabled: this.props.disabled,
            checked: this.state.checked
        };

        return (
            <div>
                <Checkbox {...checkboxProps} onCheck={this.onCheck}/>
            </div>
        );
    }

    private updateTotal(value: boolean) {
        value
            ? this.props.onTotalChange(this.props.fixed, this.props.recurring, {checked: value})
            : this.props.onTotalChange(0, 0, {checked: value});
    }

    private onCheck(event: React.MouseEvent<{}>, checked: boolean) {
        this.setState({checked});
        this.updateTotal(checked);
    }
}
