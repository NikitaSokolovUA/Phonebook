import Filter from 'components/Filter';
import PropTypes from 'prop-types';
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

EditMenu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
