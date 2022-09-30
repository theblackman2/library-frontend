import React from "react";
import styled from "styled-components";

function Book({ title, author }) {
  return (
    <Container>
      <img src="https://picsum.photos/180" alt="Book" className="book-img" />
      <div className="book-infos">
        <h3 className="book-title">
          {title.slice(0, 20)}
          {title.length > 20 && <span>...</span>}
        </h3>
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
