import styled from "styled-components";
import Nav from "./Nav";
import TextBox from "./TextBox";

export default function Header() {
  return (
    <Wrapper>
      <Nav />
      <div className="container">
        <TextBox />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 100vh;
  width: 100%;

  .container {
    width: 100%;
    padding: 0 8rem;
    height: calc(85% - 8rem);
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1200px) {
      padding: 0 6rem;
    }
    @media only screen and (max-width: 1024px) {
      padding: 0 4rem;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 2rem;
    }
  }
`;
