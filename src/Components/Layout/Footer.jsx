import styled from "styled-components";
import Text from "../Text";
import Socials from "../Socials";

export default function Footer() {
  return (
    <Wrapper>
      <Text type={"sm"} center={true}>
        Site designed and developed with love by me. &copy; Michky.{" "}
        {new Date().getFullYear()}
      </Text>
      <Socials />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    &>*:first-child{
      margin-bottom: 2rem;
      max-width: 70%;
    }
  }
`;
