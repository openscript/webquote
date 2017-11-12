import * as React from 'react';
import styled from 'styled-components';

interface Props {
}

const Wrapper = styled.div`
  background-color: blue;
`;

const Container: React.SFC<Props> = props => (
    <Wrapper>
        Hello World!
    </Wrapper>
);

export const App = Container;