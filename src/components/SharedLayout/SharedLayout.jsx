import { Outlet } from 'react-router-dom';
import { AuthList, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <div>
          <Link to={'/home'}>Home </Link>
          <Link to={'/contacts'}>Contacts </Link>
        </div>
        <div>
          <AuthList>
            <li>
              <Link to={'/registration'}>Registration </Link>
            </li>
            <li>
              <Link to={'/log_in'}>Log In </Link>
            </li>
          </AuthList>
        </div>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
