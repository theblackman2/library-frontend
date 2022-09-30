import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import App from "../Layouts/App";
const axios = require("axios").default;

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loadingAuthors, setLoadingAuthors] = useState(true);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const authors = axios.get(`${api}/authors`);
    authors
      .then((data) => setAuthors(data.data))
      .then(() => setLoadingAuthors(false))
      .catch((err) => console.log(err));
  }, []);

  const page = loadingAuthors ? (
    <Loader />
  ) : (
    <Container>
      <div className="page-header">
        <h2 className="page-title">All authors</h2>
      </div>
      <Pagination items={authors} itemsPerPage={21} type="authors" />
    </Container>
  );
  return <App page={page} />;
}

export default Authors;

const Container = styled.div`
  .authors {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;
