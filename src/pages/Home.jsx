import React, { useEffect, useState } from "react";
import App from "./../Layouts/App";
import styled from "styled-components";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import Author from "../components/Author";
import Loader from "../components/Loader";
const axios = require("axios").default;

const Home = () => {
  const [recentBooks, setRecentBooks] = useState([]);
  const [loadingRecentBooks, setLoadingRecentBooks] = useState(true);
  const [newAuthors, setNewAuthors] = useState([]);
  const [loadingNewAuthors, setLoadingNewAuthors] = useState(true);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const recentBooks = axios.get(`${api}/books/recents`);
    recentBooks
      .then((response) => setRecentBooks(response.data))
      .then(() => setLoadingRecentBooks(false))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const newAuthors = axios.get(`${api}/authors/news`);
    newAuthors
      .then((response) => setNewAuthors(response.data))
      .then(() => setLoadingNewAuthors(false))
      .catch((err) => console.log(err));
  }, []);

  const page =
    loadingRecentBooks || loadingNewAuthors ? (
      <Loader />
    ) : (
      <Container>
        <div className="sections">
          <section className="section">
            <div className="section-top">
              <h2 className="section-title">Recent books</h2>
              <Link to="/books">View more</Link>
            </div>
            <div className="section-items">
              {recentBooks.map((book, index) => {
                const id = book.id;
                const title = book.title;
                const author = `${book.author_firstaname} ${book.author_lastname}`;
                const publisher = book.publisher_name;
                const authorId = book.author_id;
                const publisherId = book.publisher_id;
                return (
                  <Book
                    key={index}
                    publisher={publisher}
                    authorId={authorId}
                    publisherId={publisherId}
                    title={title}
                    author={author}
                    id={id}
                  />
                );
              })}
            </div>
          </section>
          <section className="section">
            <div className="section-top">
              <h2 className="section-title">New authors</h2>
              <Link to="/authors">View more</Link>
            </div>
            <div className="section-items">
              {newAuthors.map((item, index) => {
                const name = `${item.first_name} ${item.last_name}`;
                const id = item.id;
                return <Author key={index} name={name} id={id} />;
              })}
            </div>
          </section>
        </div>
      </Container>
    );
  return <App page={page} />;
};

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
