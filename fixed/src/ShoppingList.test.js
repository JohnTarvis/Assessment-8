import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MadLib from "./MadLib";

it("renders without crashing", function() {
  render(<MadLib />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<MadLib />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new item", function() {
  const { getByLabelText, queryByText } = render(<MadLib />);

  // no items yet
  expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

  const nameInput = getByLabelText("Name:");
  const qtyInput = getByLabelText("Qty:");
  const submitBtn = queryByText("Add a new item!")

  // fill out the form
  fireEvent.change(nameInput, { target: { value: "ice cream" }});
  fireEvent.change(qtyInput, { target: { value: 100 }});
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("ice cream: 100")).toBeInTheDocument();
});
