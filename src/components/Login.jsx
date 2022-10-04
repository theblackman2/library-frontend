import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [formInfos, setFormInfos] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const handleInfosChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInfos((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = (e) => {
    setErrors([]);
    e.preventDefault();
    Object.keys(formInfos).forEach((key) => {
      if (!formInfos[key])
        setErrors((prevState) => [
          ...prevState,
          `The field ${key} is required`,
        ]);
    });
  };
  return (
    <Container>
      <form onSubmit={handleLogin} className="form">
        <div className="errors">
          {errors.map((error, index) => (
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
            onChange={handleInfosChanges}
            id="email"
            type="email"
            placeholder="example@test.com"
            value={formInfos.name}
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
            value={formInfos.password}
            onChange={handleInfosChanges}
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
    </Container>
  );
};

export default LoginForm;

const Container = styled.div``;
