import ThemeProvider from 'mdx-deck/dist/Provider';
import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
    right: 0;
    bottom: 1%;
    left: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 1%;
  font-size: 1.1rem;
  font-weight: bold;
`;

const Provider = ({ children, ...rest }) => (
  <ThemeProvider>
    {children}
    <Footer>
      <div>
        ZIEGLER Morgan - © COPYRIGHT 2019 - Formation Git
      </div>
      <div>
        {++rest.index}/{rest.length}
      </div>
    </Footer>
  </ThemeProvider>
);

export default Provider;
