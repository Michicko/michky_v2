/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

export default function Input({
  type,
  name,
  value,
  id,
  placeholder,
  disabled,
  handleOnchange
}) {
  if (type === "textarea") {
    return (
      <TextArea
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        rows={4}
        onChange={handleOnchange}
      >
        
      </TextArea>
      
    );
  }

  return (
    <CustomInput
      type={type}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder}
      autoComplete="on"
      disabled={disabled}
      onChange={handleOnchange}
    />
  );
}

const defaultStyles = css`
  width: 100%;
  padding: 1rem;
  outline: none;
  background: transparent;
  border: 1px solid var(--dark);
`;

const CustomInput = styled.input`
  ${defaultStyles};
  height: 4.5rem;
`;

const TextArea = styled.textarea`
  ${defaultStyles};
  resize: none;
`;
