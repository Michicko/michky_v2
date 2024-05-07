import styled from "styled-components";
import Container from "../Components/Container";
import Heading from "../Components/Heading";
import Text from "../Components/Text";
import Seo from "../Components/Seo";

export default function Blog() {
  return (
    <>
     <Seo title={'Blog | Notes and thoughts'} siteName={'Michael Otaigbe (Solomon)'} description={'Software developer | Software Engineer | Web developer | Web designer'} />
      <Header>
        <Container>
          <div className="header_box">
            <Heading type="h1" className="center">
              Notes & Thoughts
            </Heading>
          </div>
        </Container>
      </Header>
      <Main>
        <Container>
          <div className="text-box">
            {/* <Text>No notes available.</Text> */}
          </div>
        </Container>
      </Main>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  height: calc(90vh - 8rem);
  margin-top: 8rem;

  .header_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const Main = styled.div`
  width: 100%;
  padding: 5rem 0;
`;
