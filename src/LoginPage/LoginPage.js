import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const history = useHistory();

  return (
    <>
      <h1>Login</h1>
      <hr />
      <div class="container">
        <label for="uname">
          <b>Username</b>
        </label>
        <input
          class="login-form"
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          class="login-form"
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button
          type="submit"
          onClick={() => history.push("/order-builder")}
        >
          Login
        </button>
      </div>
      <Link to="/">Registration</Link>
    </>
  );
};
