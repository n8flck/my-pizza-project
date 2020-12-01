import { Link } from "react-router-dom";
import "../styles.css";

export const RegistrationPage = () => {
  return (
    <>
      <h1>Registration</h1>
      <hr />
      <div class="email">
        <label>
          <b>Email</b>
        </label>
        <input
          class="registration-form"
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
      </div>

      <div class="psw">
        <label>
          <b>Password</b>
        </label>
        <input
          class="registration-form"
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
      </div>

      <div class="psw-repeat">
        <label>
          <b>Repeat Password</b>
        </label>
        <input
          class="registration-form"
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
      </div>
      <button type="submit" class="registerbtn">
        Register
      </button>
      <hr />
      <Link to="/login">Login Page</Link>
    </>
  );
};
