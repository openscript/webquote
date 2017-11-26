import {Checkbox} from 'material-ui';
import * as React from 'react';

interface Props {
    value: number;
    onTotalChange: (newTotal: number) => void;
}

export class CheckBoxItem extends React.Component<Props, {}> {
    public constructor(props: Props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
    }

    public render() {
        return (
            <div>
                <Checkbox label={'huhu'} onCheck={this.onCheck}/>
            </div>
        );
    }

    private onCheck(event: React.MouseEvent<{}>, checked: boolean) {
        checked ? this.props.onTotalChange(this.props.value) : this.props.onTotalChange(0);
    }
}
