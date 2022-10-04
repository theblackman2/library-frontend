import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/Login";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  const [logingIn, setLoginIn] = useState(true);

  return (
    <Container logingIn={logingIn}>
      <div className="form-section">
        <Link to={"/"}>Library</Link>
        <div className="switch-section">
          <button onClick={() => setLoginIn(true)} className="btn login-btn">
            Login
          </button>
          <button onClick={() => setLoginIn(false)} className="btn sign-btn">
            Sign up
          </button>
        </div>
        {logingIn ? <LoginForm /> : <RegisterForm />}
      </div>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;

  .form-section {
    width: 350px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 1rem;
    padding: 1rem;
    background-color: white;

    > a {
      margin: 0 auto;
      font-size: 20px;
      font-weight: bold;
    }

    .switch-section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-around;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .login-btn::after {
        content: "";
        display: block;
        width: 250%;
        height: 2px;
        background-color: ${({ logingIn }) =>
          logingIn ? "blue" : "transparent"};
      }

      .sign-btn::after {
        content: "";
        display: block;
        width: 250%;
        height: 2px;
        background-color: ${({ logingIn }) =>
          !logingIn ? "blue" : "transparent"};
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .errors {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .error {
          font-size: 12px;
          padding: 0;
          margin: 0;
          color: red;
        }
      }

      .btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1.5rem;
      }
    }
  }
`;
