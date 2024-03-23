/* eslint-disable react/prop-types */
import styled from "styled-components";
import Menu from "../assets/menu.svg?react";
import Close from "../assets/close.svg?react";

export default function MenuBtn({ handleOnClick, type }) {
  return (
    <Button type="button" onClick={handleOnClick}>
      {type === "menu" ? <Menu className="icon" /> : <Close className="icon" />}
    </Button>
  );
}

const Button = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  display: none;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    z-index: 5;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }

  .icon {
    height: 3rem;
    width: 3rem;
    fill: var(--dark);
  }
`;
