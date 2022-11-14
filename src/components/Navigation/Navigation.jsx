import AuthNav from 'components/AuthNav';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <Header>
          <Link to={'/contacts'}>Contacts </Link>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
