import {Checkbox} from 'material-ui';
import * as React from 'react';

interface Props {
    value: number;
    label: string;
    disabled?: boolean;
    checked?: boolean;
    onTotalChange: (newTotal: number) => void;
}

export class CheckBoxItem extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

        if (this.props.checked) {
            this.props.onTotalChange(this.props.value);
        }

        this.onCheck = this.onCheck.bind(this);
    }

    public render() {
        const {onTotalChange, ...checkboxProps} = this.props;

        return (
            <div>
                <Checkbox {...checkboxProps} onCheck={this.onCheck}/>
            </div>
        );
    }

    private onCheck(event: React.MouseEvent<{}>, checked: boolean) {
        checked ? this.props.onTotalChange(this.props.value) : this.props.onTotalChange(0);
    }
}
