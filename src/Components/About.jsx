import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import Text from "./Text";
import Stack from "../assets/stack.svg?react";
import CustomLink from "./CustomLink";
import Stacks from "./Stacks";

export default function About() {
  return (
    <Wrapper>
      <Container>
        <div className="about-box">
          <Heading type={"secondary"} mb={2}>
            About me
          </Heading>
          <Text mb={1}>
            With over 3+ years of expertise in software development, i have
            delivered innovative digital solutions across continents and
            industries in Nigeria, the UK, and the USA, creating remarkable
            products and experiences for businesses.
          </Text>
          <Text mb={1}>
            I love to build beautiful and highly performant applications and
            interfaces using whatever tools are needed. In my free time, I love
            listening to music, watching movies, reading books or playing chess
          </Text>
          <Text mb={4}>
            I&apos;m currently open to new remote roles. And if you&apos;re
            interested in working together, feel free to contact me for any
            projects or collaborations.
          </Text>
          <div className="heading-box">
            <Stack className="icon" />
            <Heading type={"tertiary"}>Tech stack</Heading>
          </div>
          <Stacks />
          <div className="links">
          <CustomLink
            to={
              "https://docs.google.com/document/d/e/2PACX-1vTj2OGvHem9qNFNQJCIDp3BBUJNnvWaggDp8SKjWtrAnhfJ7Swe31otDQ7Slnr9lwOfJ8bLDCNtOMeU/pub"
            }
            type={"external"}
          >
            My project catalog
          </CustomLink>
          <CustomLink
            to={
              "https://docs.google.com/document/d/e/2PACX-1vTWPbccBftxr7x_J6ccsCk4oZsXThEZY7T3yfQj8t__DqpNnCB3CSuaJfRyD6MJiK_YK1sy5R1gUfkC/pub"
            }
            type={"external"}
          >
            My resume
          </CustomLink>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;

  .about-box {
    width: 100%;
    max-width: 86rem;
  }

  .heading-box {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .icon {
    height: 4rem;
    width: 2.5rem;
    margin-right: 2rem;
  }

  .links{
    &>*:first-child{
      margin-right: 2rem;
    }
  }
`;
