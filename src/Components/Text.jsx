/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Text({ children,mb }) {
  return <CustomText $mb={mb}>{children}</CustomText>;
}

const CustomText = styled.p`
  font-size: var(--base-text);
  font-weight: 400;
  line-height: var(--lh-sm);
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};
`;
