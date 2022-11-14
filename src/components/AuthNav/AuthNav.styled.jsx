import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  margin-left: 40px;
  color: black;
  padding-top: 10px;
  padding-bottom: 10px;

  &.active {
    color: #2196f3;
  }
`;

export const AuthList = styled.ul`
  display: flex;
`;

export const AuthItem = styled.li`
  margin-right: 30px;
`;
