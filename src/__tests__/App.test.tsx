import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Home", () => {
  test("renders hello world", () => {
    render(<App />);
    const text = screen.getByText(/Hello world/i);
    expect(text).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(<App />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("enter input and submit", async () => {
    render(<App />);

    await userEvent.type(screen.getByPlaceholderText("Name"), "Testing");
    await userEvent.click(screen.getByText("Submit"));

    expect(screen.getByText("Hello Testing!")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toHaveValue("");
  });
});
