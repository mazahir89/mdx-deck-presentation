import React, { Fragment } from 'react';
import Navigation from '../../../utils/navigation';
import * as styled from './layout.styled';

const Layout = ({ children, previous, title, next }) => {
  return (
    <>
      <styled.Header>
        <span><a href={"#" + previous.page}>{previous.label}</a></span>
        <h1><a href={"#" + Navigation.tableOfContent.page}>{title}</a></h1>
        <span><a href={"#" + next.page}>{next.label}</a></span>
      </styled.Header>
      <styled.Main>{children}</styled.Main>
    </>
  );
};

export default Layout;
