import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "./routes";
import { MAIN_ROUTE } from "../utils/paths";

export const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};
