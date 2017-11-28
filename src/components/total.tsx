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
        let returnValue: JSX.Element = <span><strong>CHF 0.00</strong></span>;

        if (fixedTotal && recurringTotal) {
            returnValue = (
                <span>
                    <strong>CHF {numeral(fixedTotal).format('0.00')}</strong> once and <strong>
                    CHF {numeral(recurringTotal).format('0.00')}</strong> per year
                </span>
            );
        } else if (recurringTotal) {
            returnValue = <span><strong>CHF {numeral(recurringTotal).format('0.00')}</strong> per year</span>;
        } else if (fixedTotal) {
            returnValue = <span><strong>CHF {numeral(fixedTotal).format('0.00')}</strong></span>;
        }

        return (
            <div className={this.props.className}>
                {returnValue}
            </div>
        );
    }
}
