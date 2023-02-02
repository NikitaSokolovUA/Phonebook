import styled from '@emotion/styled';
import { Field } from 'formik';
import MaskedInput from 'react-text-mask';

export const ContactFormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 25px;
  letter-spacing: 0.06em;
  color: #2196f3;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LabelName = styled.label`
  margin-left: 40px;
  margin-bottom: 5px;
  display: block;
  color: #757575;
  letter-spacing: 0.03em;

  :last-of-type {
    margin-top: 20px;
  }
`;

export const ErrorMsg = styled.p`
  margin-left: 40px;
  margin-bottom: 5px;
  display: block;
  color: #b21f1f;
  letter-spacing: 0.03em;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  padding: 10px 20px;
  width: 80%;
  border: 1px solid;
  border-color: ${props => (props.error ? '#b21f1f' : 'rgba(33, 33, 33, 0.2)')};
  border-radius: 4px;
  font-size: 16px;
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

export const MaskInput = styled(MaskedInput)`
  margin-left: 40px;
  padding: 10px 20px;
  width: 80%;
  border: 1px solid;
  border-color: ${props => (props.error ? '#b21f1f' : 'rgba(33, 33, 33, 0.2)')};
  border-radius: 4px;
  font-size: 16px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  justify-content: center;
`;

export const Btn = styled.button`
  max-width: 150px;
  padding: 12px 20px;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  color: #212121;
  background-color: #f5f4fa;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover:enabled,
  :focus:enabled {
    background-color: #2196f3;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
`;
