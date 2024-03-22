import styled from "styled-components";
import Text from "./Text";

export default function TextBox() {

    const text = `<Software Developer/>`

  return (
    <Wrapper>
      <div className="greeting">
        <span className="emoji">👋</span>
        <p>Hi, I&apos;m</p>
      </div>
      <div className="name">
        <h1>Michael Otaigbe,</h1>
      </div>
      <div className="description">
        <Text>
          A passionate 
          <span className="colored"> {text}</span> with 3+ years of professional experience in
          ideating, architecting and building solutions for digital products.
        </Text>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
     color: var(--dark);
&>*:not(:last-child){
    margin-bottom: 1rem;
}
  .greeting {
    display: flex;
    align-items: center;

    .emoji {
      font-size: 2.5rem;
      margin-right: 1rem;
    }

    p {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }

  .name {
    h1 {
      font-size: 3.5rem;
      font-weight: 600;
    }
  }

  .description{
    max-width: 60rem;
  }
`;
