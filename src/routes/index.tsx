import { FC } from "react";
import { Switch, Route } from "wouter";
import Inspiration from "../features/inspiration";
import Todo from "../features/todos";

const createRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" component={Todo} />
      <Route path="/inspiration" component={Inspiration} />
    </Switch>
  );
};

export default createRoutes;
