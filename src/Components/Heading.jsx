/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

export default function Heading(props) {
  if (props.type === "h3") {
    return <Tertiary {...props} />;
  }
  if (props.type === "h2") {
    return <Secondary {...props} />;
  }

  return <Primary {...props} />;
}

const defaultStyles = css`
  font-weight: 500;
  line-height: var(--lh-sm);
  font-family: var(--font-heading);
  color: var(--darker);
  text-transform: none;
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : '1rem')};

  &.center{
    text-align: center;
  }

  &.capitalize{
    text-transform: capitalize;
  }

  &.upper{
    text-transform: uppercase;
  }
`;

const Secondary = styled.h2`
  ${defaultStyles};
  font-size: var(--h2);
`;

const Primary = styled.h1`
  ${defaultStyles};
  font-size: var(--h1);
`;

const Tertiary = styled.h3`
  ${defaultStyles};
  font-size: var(--h3);
`;
