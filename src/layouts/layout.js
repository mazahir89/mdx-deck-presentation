import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navigation from '../utils/navigation';

// & se référe à l'élément principal, ici par exemple, ça donne "header span:nth-child(odd)"
const Header = styled.header`
  position: absolute;
    top: 1%;
    right: 0;
    left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1%;

  & h1 {
    margin: 0;
    font-size: 3.5rem;

    & a {
      text-decoration: none;
    }
  }

  & span {
    font-size: 1.1rem;
  }
`;

const Main = styled.main``;

const Layout = ({ children, previous, title, next }) => {
  return (
    <>
      <Header>
        <span><a href={"#" + previous.page}>{previous.label}</a></span>
        <h1><a href={"#" + Navigation.tableOfContent.page}>{title}</a></h1>
        <span><a href={"#" + next.page}>{next.label}</a></span>
      </Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
