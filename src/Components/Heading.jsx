/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

export default function Heading({ type, mb, children }) {
  if (type === "tertiary") {
    return <Tertiary $mb={mb}>{children}</Tertiary>;
  }
  if (type === "secondary") {
    return <Secondary $mb={mb}>{children}</Secondary>;
  }
  return <Primary $mb={mb}>{children}</Primary>;
}

const defaultStyles = css`
  font-weight: 600;
  color: var(--dark);
  line-height: var(--lh-sm);
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};
`;

const Secondary = styled.h2`
  ${defaultStyles};
  font-size: 2.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Primary = styled.h1`
  ${defaultStyles};
  font-size: 3rem;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Tertiary = styled.h3`
  ${defaultStyles};
  font-size: 2rem;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
