import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Book({ title, author, id }) {
  return (
    <Container>
      <Link to={`/books/${id}`}>
        <img
          src="https://via.placeholder.com/180"
          alt="Book"
          className="book-img"
        />
      </Link>
      <div className="book-infos">
        <Link to={`/books/${id}`}>
          <h3 className="book-title">
            {title.slice(0, 20)}
            {title.length > 20 && <span>...</span>}
          </h3>
        </Link>
        <h4 className="book-author">{author}</h4>
      </div>
    </Container>
  );
}

export default Book;

const Container = styled.div`
  min-width: 200px;
  width: 200px;
  min-height: 310px;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border: 1px solid #ccc;

  .book-img {
    border-radius: inherit;
  }

  .book-infos {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.3rem;

    .book-title {
      font-size: 20px;
      font-weight: bold;
    }

    .book-author {
      font-size: 16px;
    }
  }
`;
