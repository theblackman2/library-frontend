import React from "react";
import App from "./../Layouts/App";
import styled from "styled-components";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import Author from "../components/Author";

function Home() {
  const page = (
    <Container>
      <div className="sections">
        <section className="section">
          <div className="section-top">
            <h2 className="section-title">Recent books</h2>
            <Link to="/books">View more</Link>
          </div>
          <div className="section-items">
            <Book title={"Hello word"} author={"Programming"} />
            <Book title={"Hello word"} author={"Programming"} />
            <Book title={"Hello word"} author={"Programming"} />
            <Book title={"Hello word"} author={"Programming"} />
          </div>
        </section>
        <section className="section">
          <div className="section-top">
            <h2 className="section-title">New authors</h2>
            <Link to="/authors">View more</Link>
          </div>
          <div className="section-items">
            <Author name={"Programming"} />
            <Author name={"Programming"} />
            <Author name={"Programming"} />
            <Author name={"Programming"} />
            <Author name={"Programming"} />
            <Author name={"Programming"} />
          </div>
        </section>
      </div>
    </Container>
  );
  return <App page={page} />;
}

export default Home;

const Container = styled.div`
  width: 100%;

  .sections {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    .section-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .section-items {
      display: flex;
      gap: 0.5em;
      overflow-x: scroll;
    }
  }
`;
