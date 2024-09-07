import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: Root element is always present
createRoot(root!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
