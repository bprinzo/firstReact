import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

export default () => {
  const { register, handleSubmit, getValues, errors } = useForm();
  const [validationRegister, setValidationRegister] = useState([
    { success: false, fail: false },
  ]);
  const onSubmit = (data, ev) => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      administrator,
    } = data;
    axios
      .post("http://localhost:3001/api/register", {
        firstName,
        lastName,
        username,
        email,
        password,
        administrator,
      })
      .then(function (response) {
        console.log(response);
        setValidationRegister({ success: true, fail: false });
        const token = `Bearer ${response.data.token}`;
        window.sessionStorage.setItem("token", token);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        setValidationRegister({ success: true, fail: true });
      });
    ev.target.reset();
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <input
        name="firstName"
        placeholder="First Name"
        ref={register({ required: true, minLength: 3, maxLength: 20 })}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.firstName && errors.firstName.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.firstName && errors.firstName.type === "maxLength" && (
        <p>This field is required max length of 20</p>
      )}

      <input
        name="lastName"
        placeholder="Last Name"
        ref={register({ required: true, minLength: 3, maxLength: 20 })}
      />
      {errors.lastName && errors.lastName.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.lastName && errors.lastName.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.lastName && errors.lastName.type === "maxLength" && (
        <p>This field is required max length of 20</p>
      )}

      <input
        name="email"
        placeholder="Email"
        ref={register({
          required: true,
          minLength: 3,
          maxLength: 50,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        })}
      />
      {errors.email && errors.email.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.email && errors.email.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.email && errors.email.type === "maxLength" && (
        <p>This field is required max length of 50</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>Invalid email address</p>
      )}

      <input
        name="username"
        placeholder="Username"
        ref={register({ required: true, minLength: 3, maxLength: 20 })}
      />
      {errors.username && errors.username.type === "required" && (
        <p>This field is required</p>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <p>This field is required min length of 3</p>
      )}
      {errors.username && errors.username.type === "maxLength" && (
        <p>This field is required max length of 20</p>
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

      <input
        type="password"
        name="confirmpassword"
        placeholder="Password Confirmation"
        ref={register({ validate: (value) => value === getValues("password") })}
      />
      {errors.confirmpassword && <p>Password don't match</p>}

      <div className="checkbox-div">
        <label>Administrator: </label>
        <input
          type="checkbox"
          name="administrator"
          ref={register}
          data-val="true"
          and
          value="true"
        />
      </div>

      <input type="submit" />
      {validationRegister.success ? (
        <p className="accountCreate">
          Account successfully register - <Link to="/login"> Log In </Link>
        </p>
      ) : null}
      {validationRegister.fail ? <p>Account unsuccessfully register</p> : null}
    </form>
  );
};
