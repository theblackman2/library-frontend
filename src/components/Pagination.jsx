import ReactPaginate from "react-paginate";
import React from "react";
import styled from "styled-components";
import Book from "./Book";
import { useState, useEffect } from "react";
import Author from "./Author";

const Pagination = ({ items, itemsPerPage, type }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return items.length > 0 ? (
    <Container>
      {type === "books" && (
        <div className="books">
          {currentItems.map((book, index) => {
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
      )}
      {type === "authors" && (
        <div className="authors">
          {currentItems.map((item, index) => {
            const name = `${item.first_name} ${item.last_name}`;
            const id = item.id;
            return <Author key={index} name={name} id={id} />;
          })}
        </div>
      )}
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
    </Container>
  ) : (
    <div></div>
  );
};

export default Pagination;

const Container = styled.div`
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
`;
