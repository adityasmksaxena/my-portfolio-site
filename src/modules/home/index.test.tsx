import { render } from "@testing-library/react";
import React from "react";
import Home from "./";

test("renders name", () => {
  const { getByText } = render(<Home />);
  const nameElement = getByText(/Aditya Saxena/i);
  expect(nameElement).toBeInTheDocument();
});
