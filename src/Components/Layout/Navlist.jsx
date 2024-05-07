/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Navlist({ links }) {
  const { pathname } = useLocation();
  return (
    <Links>
      {links.map((link, i) => {
        return (
          <Link
            to={`/${link === 'home' ? '' : link}`}
            key={i}
            className={`nav-link ${
              (pathname === "/" && link === "home")
                ? "active"
                : pathname === `/${link}`
                ? "active"
                : ""
            }`}
          >
            {link}
          </Link>
        );
      })}
    </Links>
  );
}

const Links = styled.div`
  display: inline-flex;
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
    font-weight: 400;
    text-transform: lowercase;
    text-decoration: none;
    color: var(--darker);
    border-bottom: 2px solid var(--darker);
    border-color: transparent;

    &:hover,
    &.active {
      border-color: var(--darker);
    }
  }
`;
