import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Container>
      <h2>
        <Link to="/">LM</Link>
      </h2>
      <nav className="nav">
        <NavLink className="link" to="/books">
          Books
        </NavLink>
        <NavLink className="link" to="/authors">
          Authors
        </NavLink>
        <NavLink className="link" to="/publishers">
          Publishers
        </NavLink>
        <Link to={"/login"} className="btn btn-primary">
          Login
        </Link>
      </nav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .active {
      color: #f96666;
    }
  }
`;
