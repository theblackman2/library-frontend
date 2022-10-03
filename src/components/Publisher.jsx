import styled from "styled-components";

const Publisher = ({ name }) => {
  return (
    <Container>
      <h3 className="name">{name}</h3>
    </Container>
  );
};

export default Publisher;

const Container = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
