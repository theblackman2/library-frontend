import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Book from "../components/Book";
import App from "../Layouts/App";
import Loader from "./../components/Loader";
const axios = require("axios").default;

function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const books = axios.get(`${api}/books`);
    books
      .then((data) => setBooks(data.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const page = loading ? (
    <Loader />
  ) : (
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
          {books.map((book, index) => {
            const title = book.title;
            const author = `${book.author_firstaname} ${book.author_lastname}`;
            return <Book key={index} title={title} author={author} />;
          })}
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
