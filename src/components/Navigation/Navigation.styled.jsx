import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #333;
`;

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40px;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  color: white;
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;

  color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  &.active {
    color: #2196f3;
  }
`;
