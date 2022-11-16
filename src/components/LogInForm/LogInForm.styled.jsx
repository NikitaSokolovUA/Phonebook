import styled from '@emotion/styled';
import { Field } from 'formik';

export const LogForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputTitle = styled.p`
  margin-left: 20px;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #2f4f4f;
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

export const ErrorMsg = styled.div`
  margin-top: 5px;
  margin-left: 20px;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #2f4f4f;
`;

export const SubmitButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  min-width: 136px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #212121;
  background-color: #f5f4fa;
  font-weight: 700;
  line-height: 1.19;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #2196f3;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
