import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Routes from "./components/Routes";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes />
		</QueryClientProvider>
	);
}

export default App;
