import Box from 'mdx-deck/dist/Box';
import Flex from 'mdx-deck/dist/Flex';
import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header``;

const Half = styled(Box)`
  & ul {
    display: inline-block;
    list-style: none;
    padding-left: 0;
  }
`;

const LayoutSplit = ({ children }) => {
  const kids = React.Children.toArray(children.props.children);
  const times = kids.length;

  return (
    <Root>
      <Header>Sommaire</Header>
      <Flex css={{ alignItems: 'center', height: '100%' }}>
        {kids.map(k => (
          <Half key={k} width={1 / times}>
            {k}
          </Half>
        ))}
      </Flex>
    </Root>
  );
};

export default LayoutSplit;
