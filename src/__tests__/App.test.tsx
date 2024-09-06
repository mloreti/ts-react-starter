import App from "../App";
import { render, screen } from "@testing-library/react";

test("renders hello world", () => {
	render(<App />);
	const text = screen.getByText(/Hello world/i);
	expect(text).toBeInTheDocument();
});
