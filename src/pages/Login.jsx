import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/Login";

const Login = () => {
  const [logingIn, setLoginIn] = useState(true);
  const [registerErrors, setRegisterErrors] = useState([]);
  const [registerInfos, setRegisterInfos] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleRegisterInfosChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterInfos({ ...registerInfos, [name]: value });
  };

  const handleRegister = (e) => {
    setRegisterErrors([]);
    e.preventDefault();
    Object.keys(registerInfos).forEach((key) => {
      if (!registerInfos[key])
        setRegisterErrors((prevState) => [
          ...prevState,
          `The field ${key} is required`,
        ]);
    });
  };

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
        {logingIn ? (
          <LoginForm />
        ) : (
          <form onSubmit={handleRegister} className="form">
            <div className="errors">
              {registerErrors.map((error, index) => (
                <p className="error" key={index}>
                  *{error}
                </p>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Name <sup>*</sup>
              </label>
              <input type="text" />
            </div>
            <div className="btns">
              <button type="reset" className="btn btn-danger">
                Clear
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        )}
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
