import {
  FooterContainer,
  Link,
  LinkList,
  SvgGitHub,
  SvgLinkedIn,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2022. Created by Sokolov Mykyta.</p>
      <LinkList>
        <li>
          <Link
            href="https://github.com/NikitaSokolovUA"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SvgGitHub />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/sokolovnikita0309/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SvgLinkedIn />
          </Link>
        </li>
      </LinkList>
    </FooterContainer>
  );
};

export default Footer;
