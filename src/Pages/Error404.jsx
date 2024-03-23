import styled from "styled-components";
import Container from "../Components/Container";
import Text from "../Components/Text";
import Heading from "../Components/Heading";

export default function Error404() {
  return (
    <>
      <Header>
        <Container>
          <Text>404</Text>
        </Container>
      </Header>
      <Wrapper>
        <Container>
          <Heading type={"primary"} mb={1}>Page not found</Heading>
          <Text>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </Text>
        </Container>
      </Wrapper>
    </>
  );
}

const Header = styled.header`
  margin-top: 8rem;
`;

const Wrapper = styled.main`
  min-height: 45rem;
`;
