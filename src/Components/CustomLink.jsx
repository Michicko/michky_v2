/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function CustomLink({ children, to, type }) {
  if (type === "external") {
    return (
      <ExternalLink href={to} target="_blank">
        {children}
      </ExternalLink>
    );
  }
  return <StyledLink to={to}>{children}</StyledLink>;
}

const defaultStyles = css`
  font-size: var(--base-text);
  font-weight: 400;
  text-decoration: none;
  color: var(--dark);
  border-bottom: 2px solid var(--dark);
  padding-bottom: .5rem;
  transition: padding .3s ease;

  &:hover{
    padding-bottom: .8rem;
  }
`;

const ExternalLink = styled.a`
  ${defaultStyles};
`;

const StyledLink = styled(Link)`
  ${defaultStyles};
`;
