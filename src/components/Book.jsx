import React from "react";
import styled from "styled-components";

function Book({ title, author }) {
  return (
    <Container>
      <img src="https://picsum.photos/180" alt="Book" className="book-img" />
      <div className="book-infos">
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
        <div className="branchs-infos">
          <div className="branch">Masina : 5</div>
          <div className="branch">Gombe : 10</div>
        </div>
      </div>
    </Container>
  );
}

export default Book;

const Container = styled.div`
  min-width: 200px;
  width: 200px;
  min-height: 250px;
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
  }
`;
