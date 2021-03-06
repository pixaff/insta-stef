import { Redirect, Route } from "react-router";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoutes({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
}
