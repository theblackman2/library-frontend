import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Book({ title, author, publisher, publisherId, id, authorId }) {
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
        <Link to={`/authors/${authorId}`}>
          <h4 className="book-author">
            <img
              alt={`${author} avatart`}
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-author-copyright-law-flaticons-flat-flat-icons.png"
            />
            {author}
          </h4>
        </Link>
        <Link to={`/publishers/${publisherId}`}>
          <h5 className="book-publisher">
            <img
              src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-author-online-business-photo3ideastudio-gradient-photo3ideastudio.png"
              alt={`${publisher} avatar`}
            />
            {publisher}
          </h5>
        </Link>
      </div>
    </Container>
  );
}

export default Book;

const Container = styled.div`
  min-width: 200px;
  width: 200px;
  min-height: 370px;
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
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 30px;
        height: auto;
      }
      font-size: 14px;
    }

    .book-publisher {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 30px;
        height: auto;
      }
      font-size: 12px;
    }
  }
`;
