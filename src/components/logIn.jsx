import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

export default (props) => {
  const [error, setError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, ev) => {
    const username = data.username;
    const password = data.password;
    ev.target.reset();
    axios
      .post("http://localhost:3001/api/authenticate", { username, password })
      .then(function (response) {
        const token = `Bearer ${response.data.token}`;
        window.sessionStorage.setItem("token", token);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Log In</h1>
      {error ? <p>Incorrect username or password</p> : null}
      <input
        name="username"
        placeholder="Username"
        ref={register({
          required: true,
          minLength: 3,
          maxLength: 50,
        })}
      />
      {errors.username && errors.username.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.username && errors.username.type === "maxLength" && (
        <p>This field is required max length of 50</p>
      )}
      {errors.username && errors.username.type === "pattern" && (
        <p>Invalid email address</p>
      )}

      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true, minLength: 3, maxLength: 20 })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.password && errors.password.type === "maxLength" && (
        <p>This field is required max length of 20</p>
      )}
      <input type="submit" />
      <p className="accountCreate">
        Don't have an account yet?<Link to="/register"> Sign up </Link>
      </p>
    </form>
  );
};
