/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function FormGroup({ children, mb }) {
  return <Wrapper $mb={mb}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};
`;
