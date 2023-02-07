// import AuthByOther from 'components/AuthByOther';
import AuthNavBox from 'components/AuthNavBox';
import Container from 'components/Container';
import Footer from 'components/Footer';
import LogInForm from 'components/LogInForm';

import { LoginBox, LoginTitle } from './LogIn.styled';

const LogIn = () => {
  return (
    <>
      <Container>
        <LoginBox>
          <LoginTitle>Login</LoginTitle>
          <LogInForm />

          <AuthNavBox
            text={'Already have not an account?'}
            link={'/registration'}
            linkText={'Sign up'}
          />
          {/* <AuthByOther /> */}
        </LoginBox>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
