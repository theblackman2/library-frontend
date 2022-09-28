import styled from "styled-components";
import Header from "../components/Header";

function App({ page }) {
  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="page">{page}</div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background-color: white;
  }

  .page {
    padding: 2rem 3rem;
    padding-top: 100px;
  }
`;
