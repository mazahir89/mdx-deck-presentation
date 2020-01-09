import styled from 'styled-components';
import Box from 'mdx-deck/dist/Box';

 export const Root = styled.div`
width: 100vw;
height: 100vh;
`;

export const Header = styled.header``;

export const Half = styled(Box)`
& ul {
  display: inline-block;
  list-style: none;
  padding-left: 0;
}
`;