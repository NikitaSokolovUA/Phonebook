import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { GreetName, GreetText, LogOutButton, User } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <User>
      <GreetText>
        Hello, <GreetName>{user.name}</GreetName>
      </GreetText>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutButton>
    </User>
  );
};

export default UserMenu;
