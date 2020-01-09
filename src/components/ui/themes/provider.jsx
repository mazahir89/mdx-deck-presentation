import ThemeProvider from 'mdx-deck/dist/Provider';
import React from 'react';
import * as styled from './provider.styled';

const Provider = ({ children, ...rest }) => (
  <ThemeProvider>
    {children}
    <styled.Footer>
      <div>
        ZIEGLER Morgan - © COPYRIGHT 2019 - Formation Git
      </div>
      <div>
        {++rest.index}/{rest.length}
      </div>
    </styled.Footer>
  </ThemeProvider>
);

export default Provider;
