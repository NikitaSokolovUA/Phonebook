import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  background-color: white;
  min-width: 600px;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color #2196f3 cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
  }
`;
