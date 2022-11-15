import styled from '@emotion/styled';

export const ListContact = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  margin-left: auto;
  margin-right: auto;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
`;
