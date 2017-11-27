import {RadioButton, RadioButtonGroup} from 'material-ui';
import * as React from 'react';

interface Props {
    id: string;
    options: Array<{
        id: string,
        label: string,
        value: number
    }>;
    onTotalChange: (newTotal: number) => void;
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
                            <RadioButton key={o.id} value={o.value} label={o.label}/>
                        );
                    })}
                </RadioButtonGroup>
            </div>
        );
    }

    private onChange(event: React.FormEvent<{}>, selected: string) {
        this.props.onTotalChange(parseInt(selected, 10));
    }
}
