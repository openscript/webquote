import {Divider} from 'material-ui';
import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.1rem;
`;

const Description = styled.div`

`;

interface Props {
    title: string;
    description: string;
    children?: ReactNode;
}

export class Item extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                <Title>{this.props.title}</Title>
                <Divider style={{marginTop: '0.3rem', marginBottom: '0.3rem'}}/>
                <Description>{this.props.description}</Description>
                {this.props.children ? this.props.children : null}
            </div>
        );
    }
}
