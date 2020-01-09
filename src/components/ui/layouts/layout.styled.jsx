import styled from 'styled-components';

// & se référe à l'élément principal, ici par exemple, ça donne "header span:nth-child(odd)"
export const Header = styled.header`
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

export const Main = styled.main``;