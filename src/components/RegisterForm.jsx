import React, { useState } from "react";

function RegisterForm() {
  const [errors, setErrors] = useState([]);
  const [formInfos, setFormInfos] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInfosChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInfos({ ...formInfos, [name]: value });
  };

  const handleRegister = (e) => {
    setErrors([]);
    e.preventDefault();
    Object.keys(formInfos).forEach((key) => {
      if (!formInfos[key])
        setErrors((prevState) => [
          ...prevState,
          `The field ${key} is required`,
        ]);
    });
    if (
      formInfos.password &&
      formInfos.confirm_password &&
      !(formInfos.password === formInfos.confirm_password)
    )
      setErrors((prevState) => [...prevState, "The passwords must match"]);
  };
  return (
    <div>
      <form onSubmit={handleRegister} className="form">
        <div className="errors">
          {errors.map((error, index) => (
            <p className="error" key={index}>
              *{error}
            </p>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="Name">
            Name <sup>*</sup>
          </label>
          <input
            name="name"
            placeholder="Ex: John Doe"
            id="name"
            value={formInfos.name}
            onChange={handleInfosChanges}
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@test.com"
            value={formInfos.email}
            onChange={handleInfosChanges}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formInfos.password}
            onChange={handleInfosChanges}
            className="form-control"
            placeholder="Your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">
            Confirm password <sup>*</sup>
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={formInfos.confirm_password}
            onChange={handleInfosChanges}
            className="form-control"
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
    </div>
  );
}

export default RegisterForm;
