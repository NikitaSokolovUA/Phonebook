import styled from '@emotion/styled';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top: 1px solid black;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #afb1b8;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* outline: 1px solid tomato; */

  :hover,
  :focus {
    background-color: #2196f3;
    color: #ffffff;
  }
`;

export const SvgGitHub = styled(FaGithubSquare)`
  width: 22px;
  height: 22px;
`;

export const SvgLinkedIn = styled(FaLinkedin)`
  width: 22px;
  height: 22px;
`;
