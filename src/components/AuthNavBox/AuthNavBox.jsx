import { BoxNav, LinkToNav, TextToNav } from './AuthNavBox.styled';

const AuthNavBox = ({ text, link, linkText }) => {
  return (
    <BoxNav>
      <TextToNav>{text} </TextToNav>
      <LinkToNav to={link}>{linkText}</LinkToNav>
    </BoxNav>
  );
};

export default AuthNavBox;
