import styled from "styled-components";
import Navlist from "./Navlist";
import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";

export default function Nav() {
  const links = ["about", "projects", "contact"];
  return (
    <Navbar>
      <img src={Logo} alt="Michael logo" className="nav-logo" />
      <Navlist links={links} />
      <MobileNav />
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  padding: 0 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    padding: 0 6rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  .nav-logo {
    height: 3.5rem;
    width: 3.5rem;
  }
`;
