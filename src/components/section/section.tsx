import {Card, CardHeader, CardText} from 'material-ui';
import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

const Description = styled.span`
  font-weight: bold;
`;

const HeaderLeftWrapper = styled.div`
  margin-right: 2rem;
`;

interface Props {
    title: string;
    description: string;
    children?: ReactNode;
    headerLeftElement?: ReactNode;
}

interface State {
    expanded: boolean;
}

export class Section extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            expanded: true
        };

        this.onExpandChange = this.onExpandChange.bind(this);
    }

    public render() {
        return (
            <Card
                style={{marginBottom: '1rem'}}
                containerStyle={{paddingBottom: 0}}
                initiallyExpanded={true}
                onExpandChange={this.onExpandChange}
            >
                <CardHeader
                    title={this.props.title}
                    titleStyle={{fontSize: '1.3em'}}
                    style={{
                        background: '#f3f3f3',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                    showExpandableButton={true}
                    actAsExpander={true}
                >
                    <HeaderLeftWrapper>
                        {this.props.headerLeftElement ? this.props.headerLeftElement : null}
                    </HeaderLeftWrapper>
                </CardHeader>
                <CardText style={{display: this.state.expanded ? 'inherit' : 'none'}}>
                    <Description>{this.props.description}</Description>
                    {this.props.children ? this.props.children : null}
                </CardText>
            </Card>
        );
    }

    private onExpandChange(isExpanded: boolean) {
        this.setState({expanded: isExpanded});
    }
}
