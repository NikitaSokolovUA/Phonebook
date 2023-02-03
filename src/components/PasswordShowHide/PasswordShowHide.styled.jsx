import styled from '@emotion/styled';

export const InputBox = styled.div`
  position: relative;
`;

export const PasswordInput = styled.input`
  padding: 10px 20px;
  width: 300px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 0.06em;
  background-color: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 1px solid #2196f3;
  }
  :focus-visible {
    border: 1px solid #2196f3;
    outline: none;
  }
`;

export const IconSecure = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: #333;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #2196f3;
  }
`;
