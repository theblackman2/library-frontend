import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import App from "../Layouts/App";
import Loader from "./../components/Loader";
import Pagination from "../components/Pagination";
const axios = require("axios").default;

function Books() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchItems, setSearchItems] = useState([]);
  const [filtering, setFiltering] = useState(false);

  const searchBooks = useCallback(
    (term) => {
      const records = books.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchItems(records);
      setFiltering(true);
    },
    [books]
  );

  //handle enter click
  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (searchTerm.length > 0) searchBooks(searchTerm);
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [searchTerm, searchBooks]);

  const itemsPerPage = 20;

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
          {filtering && (
            <button
              onClick={() => {
                setFiltering(false);
                setSearchTerm("");
              }}
              className="btn btn-danger"
            >
              Close
            </button>
          )}
          <input
            placeholder="Enter a term"
            className="form-control"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => searchBooks(searchTerm)}
            className="btn btn-secondary"
          >
            Search
          </button>
        </div>
      </div>
      <div className="page-body">
        <Pagination
          items={filtering ? searchItems : books}
          itemsPerPage={itemsPerPage}
        />
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

    .page-form {
      display: flex;
    }
  }
`;
