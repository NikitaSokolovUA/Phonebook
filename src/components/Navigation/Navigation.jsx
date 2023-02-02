import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  Logo,
  NavContainer,
} from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <Container>
          <Logo>Phonebook</Logo>
          <NavContainer>
            <Link to={'/contacts'}>Contacts </Link>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </NavContainer>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};

export default Navigation;
