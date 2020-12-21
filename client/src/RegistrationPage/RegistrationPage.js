import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles.css";

export const RegistrationPage = ({ registrSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    registrSubmit(data);
    // alert(JSON.stringify(data));
  };

  return (
    <>
      <h1>Registration</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            name="email"
            ref={register({
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            id="psw"
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
        <div>
          <label htmlFor="pswRepeat">
            <b>Repeat Password</b>
          </label>
          <input
            id="pswRepeat"
            type="password"
            placeholder="Repeat Password"
            name="pswRepeat"
            ref={register({
              required: {
                value: true,
                message: "Repeat Password field should not be blank",
              },
            })}
          />
          {errors.pswRepeat && <p>{errors.pswRepeat.message}</p>}
        </div>
        <button type="submit" className="registerbtn">
          Register
        </button>
        <hr />
      </form>
      <Link to="/login">Login Page</Link>
    </>
  );
};
