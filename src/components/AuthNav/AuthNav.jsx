import { AuthList, Link, AuthItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <AuthList>
        <AuthItem>
          <Link to={'/registration'}>Registration </Link>
        </AuthItem>
        <AuthItem>
          <Link to={'/log_in'}>Log In </Link>
        </AuthItem>
      </AuthList>
    </div>
  );
};

export default AuthNav;
