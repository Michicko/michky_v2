/* eslint-disable react/prop-types */
import styled from "styled-components";
import Logo from "./Layout/Logo";
import MenuBtn from "./MenuBtn";
import Socials from "./Socials";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MobileNav({ isMobileNavOpened, setIsMobileNavOpened }) {
  const location = useLocation();
  const {pathname} = location;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if(window.innerWidth <= 768){
        if(isMobile) return;
        setIsMobile(true);
      }else{
        if(!isMobile) return
        setIsMobile(false);
      }
    }

    checkSize();

    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, [isMobile])

  const links = ["home", "blog", "contact"];

  const closeNav = () => {
    setIsMobileNavOpened(false)
  }
 
  return (
    <Wrapper className={isMobileNavOpened ? "show" : ""}>
      <div className="bg">
        <div className="top">
          <Logo to={"/"} handleOnClick={isMobile && isMobileNavOpened ? closeNav : null} />

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
              }`} to={`/${el == 'home' ? '' : el}`} onClick={closeNav}>
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
    width: 80%;
    background: var(--light);
    transform: translateX(-30rem);
    transition: transform 0.4s ease;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
      width: 80%;
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
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 2rem;

    &>*:not(:last-child){
      margin-bottom: .5rem;
    }
  }

  .mobile-nav-link{
    font-size: 3rem;
    font-weight: 500;
    color: var(--dark); 
    text-decoration: none;
    display: inline-block;
    text-transform: none;
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--darker);
    border-color: transparent;
    padding-left: 0;
    padding-bottom: 0;


    &:hover, &.active{
      /* color: #edae0e; */
      border-color: var(--darker);
    }
  }

  .foot {
    width: 100%;
    /* padding-top: 2rem; */
    padding: 2rem 0;
    margin-top: auto;
    display: flex;
    justify-content: center;

  }
`;
