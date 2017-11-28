import * as numeral from 'numeral';
import * as React from 'react';

interface Props {
    className?: string;
    fixed?: number;
    recurring?: number;
}

export class Total extends React.Component<Props, {}> {
    public render() {
        const fixedTotal = this.props.fixed ? this.props.fixed : 0;
        const recurringTotal = this.props.recurring ? this.props.recurring : 0;

        return (
            <div className={this.props.className}>
                Once CHF {numeral(fixedTotal).format('0.00')} and CHF {numeral(recurringTotal).format('0.00')} per year
            </div>
        );
    }
}
