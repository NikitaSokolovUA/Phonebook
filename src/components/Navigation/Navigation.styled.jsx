import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  /* position: fixed; */
  width: 100%;
  background-color: #333;
  opacity: 0.95;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;

  color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  &.active {
    color: #2196f3;
  }
`;
