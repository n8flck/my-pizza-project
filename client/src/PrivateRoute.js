import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthenticationStatus } from "./state/auth/selectors";

export const PrivateRoute = ({ redirectPath, ...routeProps }) => {
  const authed = useSelector(getAuthenticationStatus);

  return authed ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};
