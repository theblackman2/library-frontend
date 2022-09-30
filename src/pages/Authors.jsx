import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import App from "../Layouts/App";
const axios = require("axios").default;

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loadingAuthors, setLoadingAuthors] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtering, setFiltering] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  const searchAuthors = (term) => {
    if (term) {
      setFiltering(true);

      const records = authors.filter(
        (author) =>
          author.first_name.toLowerCase().includes(term.toLowerCase()) ||
          author.last_name.toLowerCase().includes(term.toLowerCase())
      );

      setSearchItems(records);
    }
  };

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const authors = axios.get(`${api}/authors`);
    authors
      .then((data) => setAuthors(data.data))
      .then(() => setLoadingAuthors(false))
      .catch((err) => console.log(err));
  }, []);

  const page = loadingAuthors ? (
    <Loader />
  ) : (
    <Container>
      <div className="page-header">
        <h2 className="page-title">All authors</h2>
        <div className="search-form">
          {filtering && (
            <button
              className="btn btn-danger"
              onClick={() => {
                setFiltering(false);
                setSearchTerm("");
              }}
            >
              Close
            </button>
          )}
          <input
            className="form-control"
            placeholder="Type something"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => searchAuthors(searchTerm)}
            className="btn btn-secondary"
          >
            Search
          </button>
        </div>
      </div>
      <Pagination
        items={filtering ? searchItems : authors}
        itemsPerPage={21}
        type="authors"
      />
    </Container>
  );
  return <App page={page} />;
}

export default Authors;

const Container = styled.div`
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    .search-form {
      display: flex;
    }
  }
  .authors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
