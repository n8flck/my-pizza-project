import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const LoginPage = ({ loginSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    loginSubmit(data);
  };

  return (
    <>
      <h1>L0gin Page</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            id="uname"
            className="login-form"
            type="text"
            placeholder="Enter Username"
            name="uname"
            ref={register({
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          {errors.uname && <p>{errors.uname.message}</p>}
        </div>
        <div>
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            id="psw"
            className="login-form"
            type="password"
            placeholder="Enter Password"
            name="psw"
            ref={register({
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.psw && <p>{errors.psw.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Registration</Link>
    </>
  );
};