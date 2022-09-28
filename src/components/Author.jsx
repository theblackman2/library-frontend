import styled from "styled-components";

function Author({ name }) {
  return (
    <Container>
      <img
        src="https://picsum.photos/130"
        alt={`${name} profile`}
        className="author-img"
      />
      <div className="author-infos">
        <h3 className="author-name">{name}</h3>
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
  border: 1px solid #ccc;
`;
