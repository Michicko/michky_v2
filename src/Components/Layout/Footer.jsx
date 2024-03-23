import styled from "styled-components";
import Text from "../Text";
import Socials from "../Socials";

export default function Footer() {
  return (
    <Wrapper>
      <Socials />
      <Text>&copy; Michky. {new Date().getFullYear()}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--dark);
  padding: 2rem 8rem;

  @media only screen and (max-width: 1200px) {
    padding: 2rem 6rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }

`;
