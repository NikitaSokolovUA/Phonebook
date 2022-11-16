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
        </RegistrationBox>
      </Container>
      <Footer />
    </>
  );
};

export default Registration;
