import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/transactions" component={Transactions} />
			<Route>404: No such page!</Route>
		</Switch>
	);
};

export default Routes;
