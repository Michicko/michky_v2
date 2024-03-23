import styled from "styled-components";
import Text from "./Text";

export default function Stacks() {
  const stacks = [
    "Javascript",
    "Reactjs",
    "Nextjs",
    "Sass",
    "Redux",
    "Typescript",
    "Nodejs",
    "Expressjs",
    "Mongodb",
  ];

  const list = stacks.map((el, i) => {
    return (
      <div className="stack" key={i}>
        <Text>{el}</Text>
      </div>
    );
  });

  return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  & > * {
    margin-right: 2rem;
    margin-top: 2rem;
  }

  .stack {
    background: #edae0e4f;
    height: 4rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
