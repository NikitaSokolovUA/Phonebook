import styled from '@emotion/styled';
import { Field } from 'formik';

export const RegistForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled(Field)`
  padding-left: 20px;
  width: 300px;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.06em;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 1px solid #2196f3;
  }
  :focus-visible {
    border: 1px solid #2196f3;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #2f4f4f;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #2196f3;
  }
`;
