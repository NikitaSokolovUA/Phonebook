import AuthNavBox from 'components/AuthNavBox';
import Container from 'components/Container';
import Footer from 'components/Footer';
import RegistrationForm from 'components/RegistrationForm';
import { RegistrationBox, RegistrationTitle } from './Registration.styled';

const Registration = () => {
  return (
    <>
      <Container>
        <RegistrationBox>
          <RegistrationTitle>Registration</RegistrationTitle>
          <RegistrationForm />

          <AuthNavBox
            text={'Already have an account?'}
            link={'/log_in'}
            linkText={'Sign in'}
          />
        </RegistrationBox>
      </Container>
      <Footer />
    </>
  );
};

export default Registration;
