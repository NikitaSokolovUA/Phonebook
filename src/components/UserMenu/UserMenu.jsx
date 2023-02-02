import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { GreetName, GreetText, LogOutButton, User } from './UserMenu.styled';
import Avatar from 'react-avatar';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <User>
      <Avatar
        name={user.name}
        googleId="118096717852922241760"
        size="50"
        round="10px"
        color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
      />
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
