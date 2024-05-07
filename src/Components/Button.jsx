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
  height: 4.5rem;
  width: 100%;
  padding: 1rem;
  text-align: center;
  outline: none;
  border: 0;
  background: var(--dark);
  color: var(--light);
  font-size: 1.6rem;
  font-weight: 400;
  font-family: var(--font-body);
  text-transform: capitalize;

  &:hover, &:disabled, &.loading{
   background: rgba(56, 56, 56, .6);
  }
`;
