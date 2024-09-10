import { Route, Switch } from "wouter";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <div className="w-screen h-screen text-center p-4 flex">
      <Switch>
        <Route path="/" component={Home} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  );
};

export default Routes;
