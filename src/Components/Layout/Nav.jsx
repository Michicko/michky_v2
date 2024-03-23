import styled from "styled-components";
import Navlist from "./Navlist";
import MobileNav from "../MobileNav";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuBtn from "../MenuBtn";

export default function Nav() {
  const links = ["about", "experience", "contact"];
  const [scrolled, setSrolled] = useState(false);
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      const scrollHeight = window.scrollY;

      if (scrollHeight >= 100) {
        if (scrolled) return;
        setSrolled(true);
      }

      if (scrollHeight <= 99) {
        if (!scrolled) return;
        setSrolled(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);

    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isMobileNavOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileNavOpened]);

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Logo to={"/"} />
      <Navlist links={links} />
      <MenuBtn type={"menu"} handleOnClick={() => setIsMobileNavOpened(true)} />
      <MobileNav
        isMobileNavOpened={isMobileNavOpened}
        setIsMobileNavOpened={setIsMobileNavOpened}
      />
    </Navbar>
  );
}

const Navbar = styled.nav`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  padding: 0 8rem;

  &.scrolled {
    background: var(--light-gray);
    box-shadow: 0 2px 4px -1px rgba(56, 56, 56, 0.15);
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 6rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
