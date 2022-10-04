import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [logingIn, setLoginIn] = useState(true);
  const [loginErrors, setLoginErrors] = useState([]);
  const [registerErrors, setRegisterErrors] = useState([]);
  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });
  const [registerInfos, setRegisterInfos] = useState({
    user_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleRegisterInfosChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterInfos({ ...registerInfos, [name]: value });
  };

  const handleLoginInfosChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInfos({ ...loginInfos, [name]: value });
  };

  const handleLogin = (e) => {
    setLoginErrors([]);
    e.preventDefault();
    Object.keys(loginInfos).forEach((key) => {
      if (loginInfos[key].length <= 0)
        setLoginErrors((prevState) => [
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
          <form onSubmit={handleLogin} className="form">
            <div className="errors">
              {loginErrors.map((error, index) => (
                <p key={index} className="error">
                  *{error}
                </p>
              ))}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <sup>*</sup>{" "}
              </label>
              <input
                onChange={handleLoginInfosChanges}
                id="email"
                type="email"
                placeholder="example@test.com"
                value={loginInfos.name}
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <sup>*</sup>{" "}
              </label>
              <input
                className="form-control"
                placeholder="Your password"
                type="password"
                name="password"
                id="password"
                value={loginInfos.password}
                onChange={handleLoginInfosChanges}
              />
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
        ) : (
          <form className="form">
            {registerErrors.map((error, index) => (
              <p className="error" key={index}>
                *{error}
              </p>
            ))}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                placeholder="Ex: John Doe"
                type="text"
                name="name"
                id="name"
                value={registerInfos.name}
                onChange={handleRegisterInfosChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <sup>*</sup>
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@test.com"
                className="form-control"
                name="email"
                value={registerInfos.email}
                onChange={handleRegisterInfosChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input
                className="form-control"
                placeholder="Your password"
                type="password"
                name="password"
                id="password"
                value={registerInfos.password}
                onChange={handleRegisterInfosChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">
                Confirm password <sup>*</sup>
              </label>
              <input
                className="form-control"
                placeholder="Retype your password"
                type="password"
                name="confirm_password"
                id="confirm_password"
                value={registerInfos.confirm_password}
                onChange={handleRegisterInfosChanges}
              />
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

      .error {
        font-size: 14px;
        color: red;
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
