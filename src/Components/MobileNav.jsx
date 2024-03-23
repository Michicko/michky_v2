/* eslint-disable react/prop-types */
import styled from "styled-components";
import Logo from "./Layout/Logo";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";
import { Link, useLocation } from "react-router-dom";

export default function MobileNav({ isMobileNavOpened, setIsMobileNavOpened }) {
  const location = useLocation();
  const {pathname} = location;

  const links = ["about", "experience", "contact"];
  const closeNav = () => {
    setIsMobileNavOpened(false)
  }
 
  return (
    <Wrapper className={isMobileNavOpened ? "show" : ""}>
      <div className="bg">
        <div className="top">
          <Logo to={"/"} />
          <MenuBtn
            type={"close"}
            handleOnClick={closeNav}
          />
        </div>
        <div className="links">
          {
            links.map((el, i) => {
              return <Link key={1 + (i * 3)} className={`mobile-nav-link ${
                (pathname === "/" && el === "about")
                  ? "active"
                  : pathname === `/${el}`
                  ? "active"
                  : ""
              }`} to={`/${el}`} onClick={closeNav}>
              {el}</Link>
            })
          }
        </div>
        <div className="foot">
          <Socials />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 768px) {
    display: block;
  }

  &.show {
    width: 100%;
    overflow: unset;
  }

  .bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 30rem;
    background: var(--light);
    transform: translateX(-30rem);
    transition: transform 0.4s ease;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
      width: 20rem;
    }
  }

  &.show .bg {
    transform: translateX(0);
  }

  .top {
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .links{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .mobile-nav-link{
    font-size: 2rem;
    font-weight: 500;
    color: var(--dark); 
    text-decoration: none;
    display: inline-block;
    text-transform: capitalize;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--dark);
    &:hover, &.active{
      color: #edae0e;
    }
  }

  .foot {
    width: 100%;
    padding-top: 2rem;
    margin-top: auto;
    border-top: 1px solid var(--dark);
    display: flex;
    justify-content: center;

  }
`;
