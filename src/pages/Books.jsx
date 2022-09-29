import ReactPaginate from "react-paginate";
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
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(books.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(books.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, books]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          {currentItems.map((book, index) => {
            const title = book.title;
            const author = `${book.author_firstaname} ${book.author_lastname}`;
            return <Book key={index} title={title} author={author} />;
          })}
        </div>
        <ReactPaginate
          className="pagin"
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
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

  .page-body {
    .books {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }

    .pagin {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      .previous,
      .next {
        color: white;
        padding: 3px 6px;
        border-radius: 3px;
        width: 80px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .previous {
        background-color: #5c636a;
      }

      .next {
        background-color: #0b5ed7;
      }

      li {
        list-style: none;
      }
    }
  }
`;
