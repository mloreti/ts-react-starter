import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";

const Routes = () => {
	return (
		<div className="w-screen h-screen text-center p-4 flex">
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/transactions" component={Transactions} />
				<Route>404: No such page!</Route>
			</Switch>
		</div>
	);
};

export default Routes;
