import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 40px;
`;

export const UserBox = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: absolute;
  right: 0;
  top: 100%;
  padding: 20px;

  background-color: #d2cccc;

  transition: opacity 500ms;
`;

export const GreetText = styled.p`
  position: relative;
  margin: 0;
  padding: 10px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  color: black;
  text-transform: uppercase;

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    width: 100%;
    color: #333;

    border: 1px solid;
  }
`;

export const ProfileLink = styled(Link)`
  position: relative;
  display: block;
  margin: 20px 0;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #333;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #f30;
  }

  ::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -20px;
    width: 100%;
    color: #333;

    border: 1px solid;
  }
`;

export const LogOutButton = styled.button`
  display: block;
  padding: 20px 0 0 0;

  border: none;
  color: #333;
  background-color: transparent;

  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.03em;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #f30;
  }
`;
