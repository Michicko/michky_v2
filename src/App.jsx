import styled from "styled-components";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header />
      <Main>
        <About />
      </Main>
    </>
  );
}

export default App;
const Main = styled.main`


`;
