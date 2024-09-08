import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

	test("clicking button shows message", async () => {
		render(<App />);
		const button = screen.getByText(/Click me!/i);
		await userEvent.click(button);
		const message = screen.getByText(/You clicked me!/i);
		expect(message).toBeInTheDocument();
	});
});
