/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../../assets/logo.png";

export default function Logo({ to }) {
  return (
    <CustomLink to={to}>
      <img src={LogoImg} alt="Michael logo" className="logo-img" />
    </CustomLink>
  );
}

const CustomLink = styled(Link)`
  text-decoration: none;
  .logo-img {
    height: 3rem;
    width: 3rem;
  }
`;
