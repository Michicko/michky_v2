/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Text({ children }) {
  return <CustomText>{children}</CustomText>;
}

const CustomText = styled.p`
  font-size: var(--base-text);
  font-weight: 400;
  line-height: var(--lh-sm);
`;
