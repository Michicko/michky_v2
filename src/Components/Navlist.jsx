/* eslint-disable react/prop-types */

import styled from "styled-components";

export default function Navlist({ links }) {
  return (
    <Links>
      {links.map((link, i) => {
        return (
          <a href={`#${link}`} key={i} className="nav-link">
            {link}
          </a>
        );
      })}
    </Links>
  );
}

const Links = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  & > *:not(:last-child) {
    margin-right: 6rem;
  }

  .nav-link {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    color: var(--darker);

    &:hover{
        color: var(--danger);
    }
  }
`;
