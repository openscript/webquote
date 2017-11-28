import {Checkbox} from 'material-ui';
import * as React from 'react';

interface Props {
    fixed?: number;
    recurring?: number;
    label: string;
    disabled?: boolean;
    checked?: boolean;
    onTotalChange: (fixed?: number, recurring?: number) => void;
}

export class CheckBoxItem extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

        if (this.props.checked) {
            this.props.onTotalChange(this.props.fixed, this.props.recurring);
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
        checked ? this.props.onTotalChange(this.props.fixed, this.props.recurring) : this.props.onTotalChange(0);
    }
}
