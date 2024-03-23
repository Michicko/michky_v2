import styled from "styled-components";
import Bag from "../assets/experience.svg?react";
import Heading from "../Components/Heading";
import Container from "../Components/Container";
import ExperienceList from "../Components/ExperienceList";

export default function Experience() {
  return (
    <>
      <Header>
        <Container>
          <div className="heading-container">
            <Bag className="icon" />
            <Heading type={"secondary"}>Work Experience</Heading>
          </div>
        </Container>
      </Header>
      <Wrapper>
        <Container>
          <div className="box">
            <ExperienceList />
          </div>
        </Container>
      </Wrapper>
    </>
  );
}

const Header = styled.div`
  margin-top: 8rem;
  .icon {
    margin-right: 1rem;
  }

  .heading-container {
    display: flex;
    align-items: center;
    margin-top: -2rem;
  }
`;

const Wrapper = styled.main`

  .box {
    margin-top: -8rem;
    padding-left: 1rem;
  }
`;
