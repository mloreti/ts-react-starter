import { Route, Switch } from "wouter";
import Home from "./components/Home";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route>404: No such page!</Route>
		</Switch>
	);
};

export default Routes;
