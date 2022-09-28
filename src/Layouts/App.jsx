import styled from "styled-components";
import Header from "../components/Header";

function App({ page }) {
  return (
    <Container>
      <Header />
      <div className="page">{page}</div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  .page {
    padding: 2rem 3rem;
  }
`;
