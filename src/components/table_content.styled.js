import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
    top: 1%;
    right: 0;
    left: 0;
  margin: 0 1%;

  & span:nth-child(odd) {
    font-size: 1.1rem;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const Li = styled.li`
  &:before {
    display: inline-block;
    width: 50px;
    height: 40px;
    vertical-align: sub;
    content: '';
  }

  &.who:before {
    background: url('./src/images/smiley/qui_est_ce.png') no-repeat;
    background-size: 40px;
  }
`;