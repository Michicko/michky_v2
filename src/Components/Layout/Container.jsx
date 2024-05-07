import styled from "styled-components";

export default function Container(props) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.div`
  padding: 0 15rem;
  padding-top: 5rem;

  @media only screen and (max-width: 1200px) {
    padding: 0 8rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 992px) {
    padding: 0 6rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 4rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 2rem;
    padding-top: 5rem;
  }
`;
