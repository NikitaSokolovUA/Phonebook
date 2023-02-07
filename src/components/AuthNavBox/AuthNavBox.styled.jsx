import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BoxNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextToNav = styled.p`
  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: #333;
`;

export const LinkToNav = styled(Link)`
  margin-left: 10px;

  font-size: 18px;
  letter-spacing: 0.03em;
  font-weight: 500;

  color: #2196f3;
`;
