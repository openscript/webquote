import * as React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  margin: 1rem 0;
`;

interface Props {
    title: string;
    description: string;
    updateItem: (value: number) => void;
}

export class Item extends React.Component<Props, {}> {
    public render() {
        return (
            <ComponentWrapper>
                {this.props.title}
                {this.props.description}
            </ComponentWrapper>
        );
    }
}
