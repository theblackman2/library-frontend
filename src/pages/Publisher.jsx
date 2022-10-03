import { useParams } from "react-router-dom";
import styled from "styled-components";
import App from "../Layouts/App";

function Publisher() {
  const { id } = useParams();
  const page = <Container>Hello from publisher {id}</Container>;
  return <App page={page} />;
}

export default Publisher;

const Container = styled.div``;
