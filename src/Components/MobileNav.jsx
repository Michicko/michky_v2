import styled from "styled-components";

export default function MobileNav() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
