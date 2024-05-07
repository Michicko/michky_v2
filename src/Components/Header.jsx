import styled from "styled-components";
import Text from "./Text";

export default function Header() {
  return (
    <Wrapper>
      <div className="container">
        <div className="greeting">
          <p className="lead">Hi </p>
          <span className="emoji">👋</span>
        </div>
        <h1 className="heading heading__primary flex">
          <span>I&apos;m Michael.</span>
          <span>A Software Developer.</span>
        </h1>
        <div className="text-box">
          <Text>
            With 3+ years of professional experience in ideating, architecting and building solutions for digital products.
          </Text>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: calc(100vh - 8rem);
  width: 100%;
  margin-top: 8rem;
  padding: 0 15rem;
  padding-top: 5rem;


  @media only screen and (max-width: 1200px) {
    padding: 0 8rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 992px) {
    padding: 0 6rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 4rem;
    padding-top: 5rem;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 2rem;
    padding-top: 5rem;
  }

  .text-box{
    max-width: 55rem;
  }

  .greeting {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .lead {
      font-size: 2.5rem;
    }

    .emoji {
      font-size: 2.5rem;
      margin-left: 0.5rem;
      color: var(--dark);
    }
  }

  .heading {
    font-size: clamp(2.5rem, 6vmax, 8rem);
    font-family: var(--font-heading);
    line-height: 1.2;
    margin-bottom: 2rem;
    letter-spacing: 0.05rem;
    color: var(--darker);
    font-weight: 500;

    &.flex {
      display: flex;
      flex-direction: column;
    }
  }

  .container {
    width: 100%;
    height: calc(100% - 14rem);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
`;
