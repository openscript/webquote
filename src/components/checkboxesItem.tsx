import {Checkbox} from 'material-ui';
import * as React from 'react';

interface Props {
    options: Array<{
        id: string;
        fixed?: number;
        recurring?: number;
        label: string;
        disabled?: boolean;
        checked?: boolean;
    }>;
    onTotalChange: (fixed?: number, recurring?: number) => void;
}

interface State {
    options: Array<{
        id: string;
        fixed?: number;
        recurring?: number;
        label: string;
        disabled?: boolean;
        checked?: boolean;
    }>;
}

export class CheckBoxesItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            options: this.props.options
        };

        this.updateTotal();
        this.createOnCheck = this.createOnCheck.bind(this);
    }

    public render() {

        return (
            <div>
                {this.state.options.map((option) => {
                    return (
                        <Checkbox
                            key={option.id}
                            onCheck={this.createOnCheck(option.id)}
                            label={option.label}
                            disabled={option.disabled}
                            checked={option.checked}
                        />
                    );
                })}
            </div>
        );
    }

    private updateTotal() {
        const fixedTotal = this.state.options.reduce(
            (sum, option) => option.checked && option.fixed ? option.fixed + sum : sum, 0
        );
        const recurringTotal = this.state.options.reduce(
            (sum, option) => option.checked && option.recurring ? option.recurring + sum : sum, 0
        );
        this.props.onTotalChange(fixedTotal, recurringTotal);
    }

    private createOnCheck(id: string) {
        return (event: React.MouseEvent<{}>, checked: boolean) => {
            this.setState({options: this.state.options.map(
                (option) => option.id === id ? {...option, checked} : option
            )}, () => this.updateTotal());

        };
    }
}
