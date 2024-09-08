import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Home", () => {
	test("renders hello world", () => {
		render(<App />);
		const text = screen.getByText(/Hello world/i);
		expect(text).toBeInTheDocument();
	});

	test("renders click me button", () => {
		render(<App />);
		const button = screen.getByText(/Click me!/i);
		expect(button).toBeInTheDocument();
	});
});
