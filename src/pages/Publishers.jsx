import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import Publisher from "../components/Publisher";
import App from "./../Layouts/App";
const axios = require("axios").default;

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);
  const [loadingPublishers, setLoadingPublishers] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const filterItems = (term) => {
    setFiltering(true);
    const records = publishers.filter((publiser) =>
      publiser.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchItems(records);
  };

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const publishers = axios.get(`${api}/publishers`);
    publishers
      .then((response) => setPublishers(response.data))
      .then(() => setLoadingPublishers(false))
      .catch((err) => console.log(err));
  }, []);
  const page = loadingPublishers ? (
    <Loader />
  ) : (
    <Container>
      <div className="publishers-head">
        <h2 className="page-title">All publishers</h2>
        <div className="publisher-form">
          {filtering && (
            <button
              onClick={() => {
                setFiltering(false);
                setSearchTerm("");
              }}
              className="btn btn-danger"
            >
              Close
            </button>
          )}
          <input
            className="form-control"
            type="text"
            value={searchTerm}
            placeholder="Type something"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => filterItems(searchTerm)}
            className="btn btn-secondary"
          >
            Search
          </button>
        </div>
      </div>
      <div className="publishers">
        {!filtering
          ? publishers.map((publisher, index) => {
              const id = publisher.id;
              const name = publisher.name;
              return (
                <Link key={index} to={`/publishers/${id}`}>
                  <Publisher name={name} />
                </Link>
              );
            })
          : searchItems.map((publisher, index) => {
              const id = publisher.id;
              const name = publisher.name;
              return (
                <Link key={index} to={`/publishers/${id}`}>
                  <Publisher name={name} />
                </Link>
              );
            })}
      </div>
    </Container>
  );
  return <App page={page} />;
};

export default Publishers;

const Container = styled.div`
  .page-title {
    margin: 1rem 0;
  }

  .publishers {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }

  .publishers-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .publisher-form {
      display: flex;
    }
  }
`;
