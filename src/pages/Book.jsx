import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import App from "./../Layouts/App";
import Loader from "../components/Loader";
const axios = require("axios").default;

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const book = axios.get(`${api}/books/${id}`);

    book
      .then((data) => setBook(data.data[0]))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [id]);

  const page = loading ? (
    <Loader />
  ) : (
    <Container>
      <div className="banner">
        <img src="https://via.placeholder.com/500" alt="Banner" />
      </div>
      <div className="book-infos">
        <h2 className="book-title">{book.title}</h2>
        <div className="others-infos">
          <div className="infos">
            <img
              alt="Author avatar"
              src="https://img.icons8.com/fluency/48/000000/writer-male.png"
            />{" "}
            <span>{`${book.author_firstaname} ${book.author_lastname}`}</span>
          </div>
          <div className="infos">
            <img
              alt="Publisher avatar"
              src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-author-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png"
            />
            <span>{book.publisher_name}</span>
          </div>
        </div>
      </div>
    </Container>
  );

  return <App page={page} />;
}

export default Book;

const Container = styled.div`
  .banner {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .book-infos {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .others-infos {
      padding: 0 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      .infos {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
