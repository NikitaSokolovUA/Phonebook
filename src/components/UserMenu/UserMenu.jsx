import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useState } from 'react';
import {
  GreetText,
  LogOutButton,
  ProfileLink,
  User,
  UserBox,
} from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useEffect } from 'react';

const UserMenu = () => {
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleCloseUserMenu = () => {
    setIsOpenUserMenu(prevState => !prevState);
  };

  useEffect(() => {
    const closeUserMenu = e => {
      const KEY_CODE_ESCAPE = 'Escape';

      if (e.code === KEY_CODE_ESCAPE) {
        handleCloseUserMenu();
      }
    };

    if (isOpenUserMenu) {
      window.addEventListener('keydown', closeUserMenu);
    }

    return () => window.removeEventListener('keydown', closeUserMenu);
  }, [isOpenUserMenu]);

  return (
    <User>
      <Avatar
        onClick={handleCloseUserMenu}
        name={user.name}
        googleId="118096717852922241760"
        size="50"
        round="10px"
        style={{ cursor: 'pointer' }}
        color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
      />
      <UserBox isOpen={isOpenUserMenu}>
        <GreetText>{user.name}</GreetText>
        <ProfileLink>Profile</ProfileLink>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </LogOutButton>
      </UserBox>
    </User>
  );
};

export default UserMenu;
