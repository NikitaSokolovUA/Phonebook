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
        </LoginBox>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
