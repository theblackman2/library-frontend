import React, { useState } from "react";
import styled from "styled-components";
import Book from "../components/Book";
import App from "../Layouts/App";

function Books() {
  const [searchTerm, setSearchTerm] = useState("");

  const page = (
    <Container>
      <div className="page-header">
        <h2 className="page-title">All books</h2>
        <div className="page-form">
          <input
            placeholder="Enter a term"
            className="form-control"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-secondary">Search</button>
        </div>
      </div>
      <div className="page-body">
        <div className="books">
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
          <Book title={"Hello word"} author={"Mastery JS"} />
        </div>
      </div>
    </Container>
  );
  return <App page={page} />;
}

export default Books;

const Container = styled.div`
  .page-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .page-body {
    .books {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
`;
