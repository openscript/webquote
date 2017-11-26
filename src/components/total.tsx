import * as React from 'react';

interface Props {
    className?: string;
    value: number;
}

export class Total extends React.Component<Props, {}> {
    public render() {
        return (
            <div className={this.props.className}>
                {this.props.value}
            </div>
        );
    }
}
