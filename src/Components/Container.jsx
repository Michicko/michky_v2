/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 8rem;
  @media only screen and (max-width: 1200px) {
    padding: 6rem 6rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 6rem 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 6rem 2rem;
  }
`;
