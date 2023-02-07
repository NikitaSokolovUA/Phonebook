import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegistrationBox = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 0;
`;

export const RegistrationTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
  letter-spacing: 0.06em;
  color: #2196f3;
`;

export const BoxToSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextToSignUp = styled.p`
  font-size: 14px;
  letter-spacing: 0.03em;
  font-weight: 400;
  color: #333;
`;

export const LinkToSignUp = styled(Link)`
  margin-left: 10px;

  font-size: 18px;
  letter-spacing: 0.03em;
  font-weight: 500;

  color: #2196f3;
`;
