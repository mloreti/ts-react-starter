import { Route, Switch } from "wouter";
import Home from "../Home";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route>404: No such page!</Route>
		</Switch>
	);
};

export default Routes;
