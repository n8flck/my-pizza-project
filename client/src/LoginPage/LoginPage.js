import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { authSlice } from "../state/auth/authSlice";
import { store } from "../store";

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [, setState] = useState({});

  useEffect(() => {
    return () => {
      setState({});
    };
  }, []);

  const onSubmit = (loginCredentials) => {
    store.dispatch(authSlice.actions.success(loginCredentials));
    history.push("/order-builder");
  };

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            id="username"
            className="login-form"
            type="text"
            placeholder="Enter Username"
            name="username"
            ref={register({
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            id="password"
            className="login-form"
            type="password"
            placeholder="Enter Password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Registration</Link>
    </>
  );
};
