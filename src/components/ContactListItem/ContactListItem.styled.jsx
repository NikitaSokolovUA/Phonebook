import styled from '@emotion/styled';

export const ContactName = styled.p`
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #778899;
`;
export const ContactNumber = styled.p`
  font-size: 20px;
  letter-spacing: 0.03em;
  color: #2f4f4f;
`;

export const ContactListBtn = styled.li`
  :first-of-type {
    margin-bottom: 20px;
  }
`;

export const ContactItemBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
  }
`;
