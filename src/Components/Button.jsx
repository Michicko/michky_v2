/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Button({ type, children, disabled, handleOnClick }) {
  return (
    <CustomButton type={type} disabled={disabled} onClick={handleOnClick}>
      {children}
    </CustomButton>
  );
}

const CustomButton = styled.button`
  height: 4rem;
  width: 100%;
  padding: 1rem;
  text-align: center;
  outline: none;
  border: 0;
  background: var(--dark);
  color: var(--light);
  font-size: var(--base-text);
  font-weight: 400;

  &:hover, &:disabled, &.loading{
   background: rgba(56, 56, 56, .6);
  }
`;
