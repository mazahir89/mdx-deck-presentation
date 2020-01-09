import Flex from 'mdx-deck/dist/Flex';
import React from 'react';
import * as styled from './layoutSplit.styled';

const LayoutSplit = ({ children }) => {
  const kids = React.Children.toArray(children.props.children);
  const times = kids.length;

  return (
    <styled.Root>
      <styled.Header>Sommaire</styled.Header>
      <Flex css={{ alignItems: 'center', height: '100%' }}>
        {kids.map(k => (
          <styled.Half key={k} width={1 / times}>
            {k}
          </styled.Half>
        ))}
      </Flex>
    </styled.Root>
  );
};

export default LayoutSplit;
export { styled };
