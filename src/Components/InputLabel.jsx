/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function InputLable({ htmlFor, children, required, mb }) {
  return (
    <CustomLabel htmlFor={htmlFor} $mb={mb}>
      {children} {required && "*"}
    </CustomLabel>
  );
}

const CustomLabel = styled.label`
  font-size: var(--base-text);
  font-weight: 400;
  color: var(--dark);
  margin-bottom: ${(props) => (props.$mb ? `${props.$mb}rem` : 0)};
  text-transform: capitalize;
`;
