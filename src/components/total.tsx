import * as React from 'react';

interface Props {
    value: number;
}

export class Total extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}