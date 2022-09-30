import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import App from "../Layouts/App";
const axios = require("axios").default;

function Author() {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [loadingAuthor, setLoadingAuthor] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const books = axios.get(`${api}/authors/${id}/books`);

    books
      .then((data) => setBooks(data.data))
      .then(() => setLoadingBooks(false))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const author = axios.get(`${api}/authors/${id}`);
    author
      .then((data) => setAuthor(data.data[0]))
      .then(() => setLoadingAuthor(false))
      .catch((err) => console.log(err));
  }, [id]);

  const page =
    loadingAuthor || loadingBooks ? (
      <Loader />
    ) : (
      <Container>
        <div className="banner">
          <img
            src="https://via.placeholder.com/200"
            alt="Author avatar"
            className="author-img"
          />
          <h4 className="author-name">{`${author.first_name} ${author.last_name}`}</h4>
        </div>
        <h2 className="page-title">Books</h2>
        <Pagination items={books} itemsPerPage={5} type="books" />
      </Container>
    );
  return <App page={page} />;
}

export default Author;

const Container = styled.div`
  .banner {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      border-radius: 50%;
    }
  }

  .page-title {
    margin: 2rem 0;
  }
`;
