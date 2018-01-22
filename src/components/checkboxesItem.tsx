import {Checkbox} from 'material-ui';
import * as React from 'react';

interface ExternalState {
    checked: string[];
}

interface Props {
    options: Array<{
        id: string;
        fixed?: number;
        recurring?: number;
        label: string;
        disabled?: boolean;
        checked?: boolean;
    }>;
    state?: ExternalState;
    onTotalChange: (fixed?: number, recurring?: number, state?: ExternalState) => void;
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
    state: ExternalState;
}

export class CheckBoxesItem extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            options: this.populateOptions(),
            state: this.props.state ? this.props.state : {checked: []}
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

    private populateOptions() {
        let populatedOptions = this.props.options;
        if (this.props.state && this.props.state.checked.length > 0) {
            const externalState = this.props.state;
            populatedOptions = populatedOptions.map((option) => {
                if (externalState.checked.indexOf(option.id) > -1) {
                    return {...option, checked: true};
                }
                return option;
            });
        }
        return populatedOptions;
    }

    private updateTotal() {
        const fixedTotal = this.state.options.reduce(
            (sum, option) => option.checked && option.fixed ? option.fixed + sum : sum, 0
        );
        const recurringTotal = this.state.options.reduce(
            (sum, option) => option.checked && option.recurring ? option.recurring + sum : sum, 0
        );
        const checked = this.state.options.filter((value) => value.checked).map((value) => value.id);
        this.props.onTotalChange(fixedTotal, recurringTotal, {checked});
    }

    private createOnCheck(id: string) {
        return (event: React.MouseEvent<{}>, checked: boolean) => {
            this.setState({options: this.state.options.map(
                (option) => option.id === id ? {...option, checked} : option
            )}, () => this.updateTotal());
        };
    }
}
