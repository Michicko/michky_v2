import styled from "styled-components";
import Github from "../assets/github.svg?react";
import X from "../assets/x.svg?react";
import Linkedin from "../assets/linkedin.svg?react";

export default function Socials() {
  return (
    <Wrapper>
      <a href="https://github.com/Michicko" className="link" target="_blank">
        <Github className="icon" />
      </a>
      <a href="https://twitter.com/Michky__" className="link" target="_blank">
        <X className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/michky81/"
        className="link"
        target="_blank"
      >
        <Linkedin className="icon" />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  .icon {
    height: 2.2rem;
    width: 2.2rem;
    @media only screen and (max-width: 768px) {
      height: 2rem;
    width: 2rem;
    }
  }
`;
