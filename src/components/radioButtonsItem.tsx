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
    onTotalChange: (fixed?: number, recurring?: number) => void;
}

export class RadioButtonsItem extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <RadioButtonGroup name={this.props.id} onChange={this.onChange}>
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
            this.props.onTotalChange(target.fixed, target.recurring);
        }
    }
}
