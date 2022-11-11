import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #dcdcdc;
`;

export const Link = styled(NavLink)`
  color: black;

  &.active {
    color: green;
  }
`;

export const AuthList = styled.ul`
  display: flex;
`;
