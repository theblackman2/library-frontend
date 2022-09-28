import React from "react";
import App from "./../Layouts/App";
import styled from "styled-components";
import Book from "../components/Book";

function Home() {
  const page = (
    <Container>
      <section className="section">
        <h2 className="section-title">Recent books</h2>
        <div className="section-items">
          <Book title={"Hello word"} author={"Programming"} />
          <Book title={"Hello word"} author={"Programming"} />
          <Book title={"Hello word"} author={"Programming"} />
          <Book title={"Hello word"} author={"Programming"} />
        </div>
      </section>
    </Container>
  );
  return <App page={page} />;
}

export default Home;

const Container = styled.div`
  width: 100%;

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .section-items {
      display: flex;
      gap: 0.5em;
      overflow: scroll;
    }
  }
`;
