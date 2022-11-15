import Filter from 'components/Filter';
import { AddContactBtn, EditContainer } from './EditMenu.styled';

const EditMenu = ({ toggleModal }) => {
  const handleBtnClick = () => {
    toggleModal();
  };

  return (
    <EditContainer>
      <AddContactBtn type="button" onClick={handleBtnClick}>
        Add Contact
      </AddContactBtn>
      <Filter />
    </EditContainer>
  );
};

export default EditMenu;
