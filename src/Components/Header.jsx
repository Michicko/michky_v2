import styled from "styled-components";
import TextBox from "./TextBox";
import ArrowDown from "../assets/arrow-down.svg?react";

export default function Header() {
  return (
    <Wrapper>
      <div className="container">
        <TextBox />
      </div>
      <div className="scroll-box">
        <p>Scroll down</p>
        <span className="icon-box">
          <ArrowDown className="icon" />
        </span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 100vh;
  width: 100%;
  margin-top: 8rem;

  .container {
    width: 100%;
    padding: 0 8rem;
    height: calc(100% - 14rem);
    display: flex;
    align-items: center;
    position: relative;

    @media only screen and (max-width: 1200px) {
      padding: 0 6rem;
    }
    @media only screen and (max-width: 1024px) {
      padding: 0 4rem;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 2rem;
    }
  }

  .scroll-box {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 4rem;
    right: 6rem;

    p {
      font-size: var(--base-text);
      color: #777;
      font-weight: 400;
    }
  }

  .icon {
    height: 1.6rem;
    width: 1.8rem;
    margin-left: 1rem;
    fill: var(--dark);
    animation: infiniteScroll 1s cubic-bezier(.175,.885,.32,1.275) infinite;

    &-box{
      overflow: hidden;
    }
  }

  @keyframes infiniteScroll {
    0%{
      transform: translateY(-100%);
    }

    100%{
      transform: translateY(0);
    }
  }
`;
