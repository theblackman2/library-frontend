import { Link } from "react-router-dom";
import styled from "styled-components";

function Author({ name, id }) {
  return (
    <Container>
      <div className="author-img">
        <Link to={`/authors/${id}`}>
          <img src="https://picsum.photos/130" alt={`${name} profile`} />
        </Link>
      </div>
      <div className="author-infos">
        <Link to={`/authors/${id}`}>
          <h4 className="author-name">{name}</h4>
        </Link>
      </div>
    </Container>
  );
}

export default Author;

const Container = styled.div`
  width: 150px;
  min-height: 200px;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;

  .author-infos {
    .author-name {
      font-size: 18px;
    }
  }
`;
