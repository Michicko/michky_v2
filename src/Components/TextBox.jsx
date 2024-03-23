import styled from "styled-components";
import Text from "./Text";

export default function TextBox() {

    const text = `<Software Developer/>`

  return (
    <Wrapper>
      <div className="greeting">
        <p>Hi there</p>  
        <span className="emoji">👋</span>
      </div>
      <div className="name">
       <h1><span className="tiny">I&apos;m</span> Michael Otaigbe,</h1>
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
      /* margin-right: 1rem; */
      margin-left: .6rem;
    }

    p {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .name {
    h1 {
      font-size: 3.2rem;
      font-weight: 600;

      @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
      }

      .tiny{
        font-weight: 300;
      }
    }
  }

  .description{
    max-width: 60rem;
  }
`;
