import styled from "styled-components";
import Container from "./Container";

export default function About() {
  return (
    <Wrapper>
      <Container>
        <p>
          With over 3+ years of expertise in software development, i have
          delivered innovative digital solutions across continents and
          industries in Nigeria, the UK, and the USA, creating remarkable
          products and experiences for businesses.
        </p>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
`;
