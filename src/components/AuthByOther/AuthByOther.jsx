import { AuthBox } from './AuthByOther.styled';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebook } from 'react-icons/fa';

const AuthByOther = () => {
  const responseFacebook = response => {
    console.log(response);
  };

  return (
    <AuthBox>
      <GoogleOAuthProvider>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        callback={responseFacebook}
        render={renderProps => (
          <btnFacebook onClick={renderProps.onClick}>
            <FaFacebook />
          </btnFacebook>
        )}
      />
    </AuthBox>
  );
};

export default AuthByOther;
