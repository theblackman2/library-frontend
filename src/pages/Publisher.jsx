import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import App from "../Layouts/App";
const axios = require("axios").default;

function Publisher() {
  const { id } = useParams();
  const [publisher, setPublisher] = useState({});
  const [loadingPublisher, setLoadingPublisher] = useState(true);
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const publisher = axios.get(`${api}/publishers/${id}`);
    publisher
      .then((response) => setPublisher(response.data))
      .then(() => setLoadingPublisher(false))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const books = axios.get(`${api}/publishers/${id}/books`);
    books
      .then((response) => setBooks(response.data))
      .then(() => setLoadingBooks(false))
      .catch((err) => console.log(err));
  }, [id]);
  const page =
    loadingBooks || loadingPublisher ? (
      <Loader />
    ) : (
      <Container>
        {publisher.length > 0 ? (
          <>
            <div className="head">
              <h2>{publisher[0].name}</h2>
            </div>
            <div className="body">
              <Pagination items={books} itemsPerPage={5} type="books" />
            </div>
          </>
        ) : (
          <div>No publisher for this id</div>
        )}
      </Container>
    );
  return <App page={page} />;
}

export default Publisher;

const Container = styled.div``;
