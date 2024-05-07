/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Text({ children,mb, type, center }) {
  return <CustomText $mb={mb} className={`${type} ${center ? 'center' : ''}`}>{children}</CustomText>;
}

const CustomText = styled.p`
  font-size: var(--base-text);
  font-weight: 400;
  color: var(--dark);
  line-height: var(--lh-sm);
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};

  &.sm{
    font-size: var(--sm-text);
  }

  &.center{
    text-align: center;
  }
`;
